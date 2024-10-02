import React, { useState } from 'react';
import haaloData from '../JSON/haaloData'
import * as PersonaService from '../services/PersonaService'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.js'
import Header from './Header.js';
import submitHAALOToAirTable from '../APIs/airtable.js';
import submitHAALOToCrelate from '../APIs/crelate.js';
import { ADHOCRACY, COMMUNITY, HIERARCHY, MARKET } from '../JSON/haaloObjects.js';
import ReCAPTCHA from "react-google-recaptcha";



const Questions = () => {
    const [choices, setChoices] = useState(() => {
        const initialArray = [];
    
        for (let i = 0; i < 30; i++) {
          initialArray.push({questionId: i, optionIndex: -1, option: null})
        }
        return initialArray
    });

    const [questionIndex, setQuestionIndex] = useState(0);
    const [yourName, setYourName] = useState({
        firstName: '',
        lastName: ''
    });
    const [yourEmail, setYourEmail] = useState('');
    const [cap, setCap] = useState('')

    const handleNameChange = (e) => {
        if (e.target.name === "firstName")  {
            setYourName({...yourName, firstName: e.target.value})
        }
        else setYourName({...yourName, lastName: e.target.value})
    }

    const handleEmailChange = (e) => {
        setYourEmail(e.target.value.toLowerCase())
    }

    const handleNextQuestion = () => {
        if (questionIndex <= haaloData.length - 1 && choices[questionIndex].option != null) {
            setQuestionIndex(questionIndex + 1)
        }  
    }

    const isAnswered = (choice) => (choice.option !== null);
    const answeredAllQuestions = () => {
        return choices.every(isAnswered);
    }

    const handleResponseChange = (option, optIndex, qIndex) => {
        setChoices(prevChoices => {
          const newChoices = [...prevChoices];
          newChoices[qIndex] = {questionId: qIndex, optionIndex: optIndex, option: option};
          return newChoices;
        });
        handleNextQuestion()
    };

    const validEmail = () => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(yourEmail).toLowerCase());
    }

    const navigate = useNavigate()

    const takeToResults = async (e) => {
        e.preventDefault()
        if (answeredAllQuestions() && validEmail() && yourName.firstName !== '' && yourName.lastName !== '' && cap) {
            const user = {firstName: yourName.firstName[0].toUpperCase() + yourName.firstName.slice(1), 
            lastName: yourName.lastName[0].toUpperCase() + yourName.lastName.slice(1), email: yourEmail}

            const persona = PersonaService.findPersona(choices)

            // Get scores
            const percentages = PersonaService.getPercentages(choices)
            const array = Object.keys(percentages).map(key => `${key}= ${(percentages[key].toPrecision(2).substring(2, 4))}%`)
            const scores = array.join(' | ')

            // Get culture
            const arr = Object.values(percentages)
            const max = arr.indexOf(Math.max(...arr))
            let culture = ''
            if (max === 0) culture = `${ADHOCRACY.name} - ${ADHOCRACY.description}`
            else if (max === 1) culture = `${HIERARCHY.name} - ${HIERARCHY.description}`
            else if (max === 2) culture = `${COMMUNITY.name} - ${COMMUNITY.description}`
            else culture = `${MARKET.name} - ${MARKET.description}`
            
            submitHAALOToAirTable(user, persona, scores, culture)
            submitHAALOToCrelate(user, persona, scores, culture, percentages)
            
            navigate('/results', { state: { persona } })
        }   
    }   

    return (
        <div className='bg-companyGray'>
            <Header />
            <main className='md:px-[6rem]'>
                <div id="step1" className=" bg-white md:px-[7rem] py-[3rem] md:my-[1.5rem] md:rounded-[8px] grid">
                    <div className='flex justify-center'>
                        <div className="flex justify-between w-[16rem] md:w-[20rem] items-center">
                            <div className="step_selected">
                                <p className='step_num'>Step 1</p>
                            </div>
                            <div className="step_line" />
                            <div className="step_unselected">
                                <p className='step_num'>Step 2</p>
                            </div>
                            <div className="step_line" />
                            <div className="step_unselected">
                                <p className='step_num'>Step 3</p>
                            </div>
                        </div>
                    </div>
                    <Instructions />
                </div>
                    <div className='bg-white px-[2rem] md:px-[7rem] py-[3rem] mt-[1.5rem] md:my-[1.5rem] md:rounded-[8px] grid justify-center'>
                        <form className='grid' onSubmit={(e) => takeToResults(e)}>
                            <input type="hidden" name="subject" value="HAALO Results Submission" />
                            <input type="hidden" name="recipient" value="haalo@avenica.com" />
                            <h3 className='text-companyBlue text-[28px] mb-[1rem] mx-[0.5rem] md:mx-[5rem] text-center'>Please provide your contact information.</h3>
                            <div className="question mt-[1rem]">
                                <label htmlFor="firstName">First Name</label>
                                <input className='input' type="text" required="required" onChange={handleNameChange} id="firstName" name="firstName" />
                            </div>
                            <div className="question">
                                <label htmlFor="lastName">Last Name</label>
                                <input className='input' type="text" required="required"  onChange={handleNameChange} id="lastName" name="lastName" />
                            </div>
                            <div className="question mb-[2.5rem]">
                                <label htmlFor="email">Email Address</label>
                                <input className='input' type="text" required="required" value={yourEmail} onChange={handleEmailChange} id="email" name="email" />
                            </div>
                            <h3 className='text-companyBlue text-[28px] mb-[1rem] mx-[0.5rem] md:mx-[5rem] text-center'>Choose the answer that best descibes you.</h3>
                            {haaloData.map((question, index) => (
                                <div className="text-lg" key={index}>
                                    <p className='text-xl mb-[0.5rem] mt-[1rem]'>{`Question ${index + 1}:`}</p>
                                        {question.options.map((option, optIndex) => (
                                            <div key={optIndex} className='mb-[0.8rem] md:mb-[0.4rem]' onClick={() => handleResponseChange(option, optIndex, index)}>
                                                <input className='mr-[0.6rem]' type="radio" required="required" name={`question${index+1}`}/>
                                                <label>{option.statement}</label>
                                            </div>
                                        ))}
                                        <div className="question_line" />
                                </div>
                            ))}

                            {/* site key for haalo.avenica.com: 6Lc-qPUpAAAAAPtuGFuylayUzDm4WmPC_SGOmc16 */}
                            {/* site key for localhost: 6LdXqvUpAAAAAJAHAwwNNuCIVAcr29_JuXXI6IfP */}

                            <ReCAPTCHA className='mx-auto mb-[1.5rem]' sitekey='6LdXqvUpAAAAAJAHAwwNNuCIVAcr29_JuXXI6IfP' required="required" onChange={(val) => setCap(val)}/>
                            <button className='button justify-self-center' type='submit'>Discover My Persona</button>
                        </form>
                    </div>
            </main>
            <Footer />
        </div>
    );
}

export default Questions;

const Instructions = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-[1.5rem] mx-[1.5rem] md:mx-[5rem]'>
            <h2 className='header mb-[0.7rem]'>Instructions:</h2>
            <p className="text-center text-lg max-w-[36rem]">Please select the answer that best aligns with you. If neither answer represents you, choose the one that feels closest to your gut reaction.<br />It typically takes around 10 minutes to complete the inventory.</p>
        </div>   
    )
}