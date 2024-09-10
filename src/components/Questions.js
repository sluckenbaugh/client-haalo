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
    const [yourName, setYourName] = useState({
        firstName: '',
        lastName: ''
    });
    const [yourEmail, setYourEmail] = useState('');

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

    const takeToResults = (e) => {
        e.preventDefault()
        if (answeredAllQuestions() && validEmail() && yourName.firstName !== '' && yourName.lastName !== '') {
            const persona = PersonaService.findPersona(choices)
            navigate('/results', { state: { persona } })
        }
    }

    return (
        <div>
            <Header />
            <div id="step2" className="container">
                <br></br>
                {/* Step 1 bubble */}
                <div className="step_unselected">
                    <p className='step_num'>Step 1</p>
                </div>

                <div className="step_line" />

                {/* Step 2 bubble */}
                <div className="step_selected">
                    <p className='step_num'>Step 2</p>
                </div>

                <div className="step_line" />

                {/* Step 3 bubble */}
                <div className="step_unselected">
                    <p className='step_num'>Step 3</p>
                </div>
                <Instructions />
                <form onSubmit={(e) => takeToResults(e)}>
                    <input type="hidden" name="subject" value="HAALO Results Submission" />
                    <input type="hidden" name="recipient" value="haalo@avenica.com" />

                    <div className="question">
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
                    </div>

                    {haaloData.map((question, index) => (
                        <div className="question" key={index}>
                            {`Question ${index + 1}:`}
                            <br/>
                                {question.options.map((option, optIndex) => (
                                    <div key={optIndex} onClick={() => handleResponseChange(option, optIndex, index)}>
                                        <input style={{marginRight: '5px'}} type="radio" required="required" name={`question${index+1}`}/>
                                        <label>{option.statement}</label> 
                                    </div>
                                ))}
                        </div>
                    ))}

                    <button className='button' type='submit'>Discover My Persona</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Questions;

const Instructions = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-5'>
            <h2 className='title1' style={{marginTop: '1%'}}>Instructions:</h2>
            <p className="instructions">Please select the answer that best aligns with you. If neither answer represents you, choose the one that feels closest to your gut reaction.<br />It typically takes 20 minutes to complete the inventory.</p>
            <br />
            <h3 className='title2'>Choose The Answer That Best Describes You:</h3>
        </div>   
    )
}