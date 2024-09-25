import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { useEffect } from 'react';
import Cards from '../services/Cards';




    const Results = ({ props }) => {
    const location = useLocation();
    const persona = location.state.persona;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);


    return (
        <div className='bg-companyGray'>
            <Header />
            <main className='px-[6rem]'>
                <div id="step3" className="bg-white px-[7rem] py-[3rem] my-[1.5rem] rounded-[8px] grid">
                    <div className="flex justify-between w-[30%] items-center justify-self-center">
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
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='text-companyBlue text-[40px] mt-[3rem] mb-[2rem]'>Your persona is: {persona.name.toUpperCase()}</h2>
                    </div>
                    <PersonaMeaning persona={persona}/>    
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Results;

const PersonaMeaning = ({ persona }) => {

    return (
        <div className='gap-10 mt-[1rem]'>
            <img className='rounded-[6px] mt-[1rem] mx-auto w-[62%]' src={Cards[persona.name]} alt={`${persona.name} persona card`} />
            <div className='my-[5rem]'>
                <h3 className='header'>What Your Persona Means:</h3>
                <div>
                    {persona.description.map((point, index) => (
                        <div className='flex my-[1rem] text-xl' key={index}>
                            <div className='text-companyYellow mr-[0.5rem]'>&#10003;</div>
                            {point}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}