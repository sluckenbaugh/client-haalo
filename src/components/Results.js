import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Results = ({ props }) => {
    const location = useLocation();
    const persona = location.state.persona;

    return (
        <div>
            <Header />
            <div id="step3" className="container">
                <div className="step_unselected">
                    <p className='step_num'>Step 1</p>
                </div>
                
                <div className="step_line" />

                <div className="step_unselected">
                    <p className='step_num'>Step 2</p>
                </div>

                <div className="step_line" />
                
                <div className="step_selected">
                    <p className='step_num'>Step 3</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h2 className='title1' style={{marginBottom: '10px'}}>Your Persona is:<br />{persona.name}</h2>
                    <img src={`https://haalo.avenica.com/_img/cards/v2/${persona.name}.png`} alt="" /><br /><br />
                </div>

                <PersonaMeaning persona={persona}/>
                
            </div>
            <Footer />
        </div>
    );
}

export default Results;

const PersonaMeaning = ({ persona }) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h3 className='title2'>What Your Persona Means:</h3>
            <div className="meaning">
                {persona.description.map((point, index) => (
                    <div key={index}>
                        <div className="checkmark">&#10003;</div>
                        {point}<br />
                    </div>
                ))}
            </div><br /><br />
        </div>
    )
}