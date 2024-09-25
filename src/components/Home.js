import React from 'react';
import Footer from './Footer.js'
import Header from './Header.js';
// import laptop from '../_img/laptop.jpg'
import Innovator from '../_img/cards/v2/Innovator.png'
import Playmaker from '../_img/cards/v2/Playmaker.png'

const Home = () => {
    
    return (
        <div className='bg-companyGray'>
            <Header />
            <main className='px-[6rem]'>
                <div id="step1" className="bg-white px-[7rem] py-[3rem] my-[1.5rem] rounded-[8px] grid">
                    <div className='flex justify-center'>
                        <div class="flex justify-between w-[30%] items-center">
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
                    <WelcomeMessage />
                    <a href="/test" className='justify-self-center mt-[2rem]'><button name="starttest" value="Take The Halo Test" className="button">Launch The HAALO Inventory</button></a>
                </div>
                <div className='bg-white px-[4rem] py-[1rem] my-[2rem]  rounded-[8px] grid'>
                    <AboutHAALO />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Home;

const WelcomeMessage = () => {
    return (
        <div className='flex flex-col items-center justify-center w-[50%] mx-auto mt-[1.5rem]'>
            <h2 className='mb-[1rem] header'>Welcome to HAALO</h2>
            <p className="text-center text-lg">Whether it's making a difference, being part of a team or seeing your name in lights, each of us have preferences and undeniable quirks that simply cannot be captured by a resume. HAALO allows us to better understand who you are, what you want, and how we can help.</p>
        </div>
    )
}

const AboutHAALO = () => {
    return (
            <div className='grid grid-cols-2 my-[2.5rem] gap-12'>
                <div className='flex flex-col'>
                    <h3 className='mb-[1rem] header'>What is HAALO?</h3>
                    <p className=" text-lg">HAALO stems from an in-depth exploration of 4 organizational cultures (Adhocracy, Community, Hierarchy, Market), delineating various working styles, motivations, and other key aspects. Through this study, we've developed a comprehensive inventory of statements, focused through a people-centric perspective. This inventory offers insights into how individuals may align within an organization or specific roles.</p>
                    <h3 className='mb-[1rem] mt-[1rem] header'>The Personas:</h3>
                    <ul className='text-xl list-disc ml-[1.6rem]'>
                        <li className='mb-[1rem]'>Academic: Relating to education and scholarship.</li>
                        <li className='mb-[1rem]'>Advocate: A person who publicly supports or recommends a particular cause or policy.</li>
                        <li className='mb-[1rem]'>Analyst: A detailed examination of anything complex in order to understand its nature or to determine its essential features. </li>
                        <li className='mb-[1rem]'>Broker: A person who buys and sells goods or assets for others.</li>
                        <li className='mb-[1rem]'>Captain: The person in command of the ship.</li>
                        <li className='mb-[1rem]'>Chameleon: A person given to often expedient or facile change in ideas or character.</li>
                        <li className='mb-[1rem]'>Closer: A person who is skilled at bringing a business transaction to a satisfactory conclusion.</li>
                        <li className='mb-[1rem]'>Consultant: A person who provides expert advice professionally.</li>
                        <li className='mb-[1rem]'>Counselor: A person trained to give guidance on personal, social, or psychological problems.</li>
                        <li className='mb-[1rem]'>Delegate: A person sent or authorized to represent others, in particular an elected representative sent to a conference.</li>
                        <li className='mb-[1rem]'>Entrepreneur: A person who organizes and operates a business or businesses, taking on  greater than normal financial risks in order to do so</li>
                        <li className='mb-[1rem]'>Envoy: A messenger or representative, especially one on a diplomatic mission.</li>
                        <li className='mb-[1rem]'>General: A commander of an army, or an army officer of very high rank.</li>
                        <li className='mb-[1rem]'>Hustler: An aggressively enterprising person; a go-getter</li>
                        <li className='mb-[1rem]'>Innovator: A person who introduces new methods, ideas, or products.</li>
                        <li className='mb-[1rem]'>Maverick: An an unorthodox or independent-minded person</li>
                        <li className='mb-[1rem]'>Mercenary: Primarily concerned with making money at the expense of ethics.</li>
                        <li className='mb-[1rem]'>Operative: A worker, especially a skilled one.</li>
                        <li className='mb-[1rem]'>Playmaker: A player in a team game who leads attacks or brings other players on the same side into a position from which they could score.</li>
                        <li className='mb-[1rem]'>Politician: A a person who is professionally involved in politics, especially as a holder of or a candidate for an elected office.</li>
                        <li className='mb-[1rem]'>Surgeon: A medical practitioner qualified to practice surgery.</li>
                        <li className='mb-[1rem]'>Trainer: A person who teaches others, source of information.</li>
                    </ul>
                </div>
                <grid className='justify-self-end'>
                    <img className='rounded-[6px] w-[550px] mb-[5rem] ' src={Innovator} alt='Innovator Persona Card'></img>
                    <img className='rounded-[6px] w-[550px]' src={Playmaker} alt='Playmaker Persona Card'></img>
                </grid>
                {/* <img className='w-[100%] justify-self-end rounded-[40px]' src={laptop}></img> */}
            </div>
    )
}