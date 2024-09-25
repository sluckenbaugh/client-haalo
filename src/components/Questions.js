import React, { useState } from 'react';
import haaloData from '../JSON/haaloData'
import * as PersonaService from '../services/PersonaService'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.js'
import Header from './Header.js';

const Questions = () => {
    const [choices, setChoices] = useState(() => {
        const initialArray = [];
    
        for (let i = 0; i < 30; i++) {
          initialArray.push({questionId: i, optionIndex: -1, option: null})
        }
        return initialArray
    });

    const [questionIndex, setQuestionIndex] = useState(0);
    // const [yourName, setYourName] = useState({
    //     firstName: '',
    //     lastName: ''
    // });
    // const [yourEmail, setYourEmail] = useState('');

    // const handleNameChange = (e) => {
    //     if (e.target.name === "firstName")  {
    //         setYourName({...yourName, firstName: e.target.value})
    //     }
    //     else setYourName({...yourName, lastName: e.target.value})
    // }

    // const handleEmailChange = (e) => {
    //     setYourEmail(e.target.value.toLowerCase())
    // }

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

    // const validEmail = () => {
    //     const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //     return re.test(String(yourEmail).toLowerCase());
    // }

    const navigate = useNavigate()

    const takeToResults = (e) => {
        e.preventDefault()
        if (answeredAllQuestions()) {
            const persona = PersonaService.findPersona(choices)
            navigate('/results', { state: { persona } })
        }
        // if (answeredAllQuestions() && validEmail() && yourName.firstName !== '' && yourName.lastName !== '') {
        //     const persona = PersonaService.findPersona(choices)
        //     navigate('/results', { state: { persona } })
        // }
    }

    return (
        <div className='bg-companyGray'>
            <Header />
            <main className='px-[6rem]'>
                    <div id="step2" className="bg-white px-[7rem] py-[3rem] my-[1.5rem] rounded-[8px] grid">
                        <div className='flex justify-center'>
                            <div className="flex justify-between w-[30%] items-center">
                                <div className="step_unselected">
                                    <p className='step_num'>Step 1</p>
                                </div>
                                <div className="step_line" />
                                <div className="step_selected">
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
                    <div className='bg-white px-[7rem] py-[3rem] my-[1.5rem] rounded-[8px] grid justify-center'>
                        <form className='grid' onSubmit={(e) => takeToResults(e)}>
                            <input type="hidden" name="subject" value="HAALO Results Submission" />
                            <input type="hidden" name="recipient" value="haalo@avenica.com" />
                            {/* <div className="question">
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" required="required" onChange={handleNameChange} id="firstName" name="firstName" />
                            </div>
                            <div className="question">
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" required="required"  onChange={handleNameChange} id="lastName" name="lastName" />
                            </div>
                            <div className="question">
                                <label htmlFor="email">Your Email:</label>
                                <input type="text" required="required" value={yourEmail} onChange={handleEmailChange} id="email" name="email" />
                            </div> */}
                            <h3 className='text-companyBlue text-[28px] mb-[1rem]'>Choose the answer that best descibes you.</h3>
                            {haaloData.map((question, index) => (
                                <div className="text-lg" key={index}>
                                    <p className='text-xl mb-[0.5rem] mt-[1rem]'>{`Question ${index + 1}:`}</p>
                                        {question.options.map((option, optIndex) => (
                                            <div key={optIndex} onClick={() => handleResponseChange(option, optIndex, index)}>
                                                <input className='mr-[0.6rem]' type="radio" required="required" name={`question${index+1}`}/>
                                                <label>{option.statement}</label>
                                            </div>
                                        ))}
                                        <div className="question_line" />
                                </div>
                            ))}
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
        <div className='flex flex-col items-center justify-center mt-[1.5rem] mx-[10rem]'>
            <h2 className='header mb-[0.7rem]'>Instructions:</h2>
            <p className="text-center text-lg">Please select the answer that best aligns with you. If neither answer represents you, choose the one that feels closest to your gut reaction.<br />It typically takes around 10 minutes to complete the inventory.</p>
        </div>   
    )
}