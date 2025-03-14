import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { useEffect } from 'react';


const Results = ({ props }) => {
    // Start at top of screen
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const location = useLocation();
    const {persona, culture, description, percentages} = location.state

    const relatedPersonas = {
        "Adhocracy": ["Pioneer", "Advocate", "Entrepreneur", "Navigator", "Diplomat", "Chameleon"],
        "Hierarchy": ["General", "Guardian", "Closer", "Scientist", "Consultant", "Mercenary"],
        "Community": ["Captain", "Champion", "Counselor", "Scholar", "Promoter", "Chameleon"],
        "Market": ["Playmaker", "Striver", "Negotiator", "Strategist", "Interpreter", "Mercenary"]
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
                            <div className="step_unselected">
                                <p className='step_num'>Step 2</p>
                            </div>
                            <div className="step_line" />
                            <div className="step_selected">
                                <p className='step_num'>Step 3</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='header my-[1rem]'>Results</h2>
                        <div className='grid grid-cols-2 gap-5 grey p-[1.5rem] rounded-[0.5rem] text-[1.2rem]'>
                            <p>Primary Culture:</p>
                            <p>{culture}</p>
                            <p>Description:</p>
                            <p>{description}</p>
                            <p className='font-bold mt-[2rem]'>Culture Breakdown</p>
                            <p></p>
                            <p>Adhocracy:</p>
                            <p>{`${percentages.A.toPrecision(2) * 100}%`}</p>
                            <p>Hierarchy:</p>
                            <p>{`${percentages.H.toPrecision(2) * 100}%`}</p>
                            <p>Community:</p>
                            <p>{`${percentages.C.toPrecision(2) * 100}%`}</p>
                            <p>Market:</p>
                            <p>{`${percentages.M.toPrecision(2) * 100}%`}</p>
                            <p className='font-bold mt-[2rem]'>Candidate Persona</p>
                            <p></p>
                            <p>Primary Persona:</p>
                            <p>{persona.name}</p>
                            <p>Related Personas:</p>
                            <ul>
                                {relatedPersonas[culture].map((p) => p !== persona.name && <li key={p}>{p}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Results;

