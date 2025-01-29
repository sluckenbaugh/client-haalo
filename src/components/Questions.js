import React, { useState, useEffect } from 'react';
import haaloData from '../JSON/haaloData'
import * as PersonaService from '../services/PersonaService'
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from './Footer.js'
import Header from './Header.js';
import submitHAALOToAirTable from '../APIs/airtable.js';
import submitHAALOToCrelate from '../APIs/crelate.js';
import { ADHOCRACY, COMMUNITY, HIERARCHY, MARKET } from '../JSON/haaloObjects.js';


const Questions = () => {

    // Start at top of screen
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const navigate = useNavigate()
    const location = useLocation()
    const { user } = location.state


    const [choices, setChoices] = useState(() => {
        const initialArray = [];
    
        for (let i = 0; i < 30; i++) {
          initialArray.push({questionId: i, optionIndex: -1, option: null})
        }
        return initialArray
    });

    const [questionIndex, setQuestionIndex] = useState(0);
    


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


    const takeToResults = async (e) => {
        e.preventDefault()
        // Validate form
        if (answeredAllQuestions()) {
            

            const persona = PersonaService.findPersona(choices)

            // Get culture percentages
            const percentages = PersonaService.getPercentages(choices)

            // Get culture
            const arr = Object.values(percentages)
            const max = arr.indexOf(Math.max(...arr))
            let culture
            let description
            if (max === 0) {
                culture = ADHOCRACY.name
                description = ADHOCRACY.description
            }
            else if (max === 1) {
                culture = HIERARCHY.name
                description = HIERARCHY.description
            }
            else if (max === 2) {
                culture = COMMUNITY.name
                description = COMMUNITY.description
            }
            else {
                culture = MARKET.name
                description = MARKET.description
            }
            
            submitHAALOToAirTable(user, persona, culture, percentages)
            // submitHAALOToCrelate(user, persona, culture, percentages)
            
            navigate('/results', { state: { persona, culture, description, percentages } })
        }   
    }   

    return (
        <div className='bg-companyGray'>
            <Header />
            <main className='md:px-[6rem]'>
                <div id="step1" className=" bg-white md:px-[7rem] py-[3rem] md:my-[1.5rem] md:rounded-[8px] grid">
                    <div className='flex justify-center'>
                        <div className="flex justify-between w-[16rem] md:w-[20rem] items-center">
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
                    <div className='bg-white px-[2rem] md:px-[7rem] py-[3rem] mt-[1.5rem] md:my-[1.5rem] md:rounded-[8px] grid justify-center'>
                        <form className='grid' onSubmit={takeToResults}>
                            <h3 className='text-companyBlue text-[28px] mb-[1rem] mx-[0.5rem] md:mx-[5rem] text-center'>Choose each answer from the perspective of your ideal candidate.</h3>
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
                            <button className='button justify-self-center' type='submit'>Submit</button>
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
            <p className="text-center text-lg max-w-[36rem]">Select the answer that you feel would best align with your desired candidate. If neither answer represents them, choose the one that feels closest to your gut reaction.<br />It typically takes around 10 minutes to complete the inventory.</p>
        </div>   
    )
}