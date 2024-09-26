import React from 'react';
import Footer from './Footer.js'
import Header from './Header.js';
// import laptop from '../_img/laptop.jpg'
import Innovator from '../_img/cards/v2/Innovator.png'
import Playmaker from '../_img/cards/v2/Playmaker.png'
import Operative from '../_img/cards/v2/Operative.png'
import Maverick from '../_img/cards/v2/Maverick.png'
import Mercenary from '../_img/cards/v2/Mercenary.png'
import Closer from '../_img/cards/v2/Closer.png'
import Captain from '../_img/cards/v2/Captain.png'
import Entrepreneur from '../_img/cards/v2/Entrepreneur.png'

const Home = () => {
    
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
                    <WelcomeMessage />
                    <a href="/test" className='justify-self-center mt-[2rem]'><button name="starttest" value="Take The Halo Test" className="button">Launch The HAALO Inventory</button></a>
                </div>
                <div className='bg-white px-[1rem] md:px-[4rem] pt-[1rem] mt-[2rem] md:my-[2rem]  md:rounded-[8px] grid'>
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
        <div className='flex flex-col items-center justify-center w-[75%] md:w-[90%] lg:w-[50%] mx-auto mt-[1.5rem]'>
            <h2 className='mb-[1rem] header text-center'>Welcome to HAALO</h2>
            <p className="text-center text-lg">Whether it's making a difference, being part of a team or seeing your name in lights, each of us have preferences and undeniable quirks that simply cannot be captured by a resume. HAALO allows us to better understand who you are, what you want, and how we can help.</p>
        </div>
    )
}

const AboutHAALO = () => {
    return (
            <div className='lg:grid grid-cols-2 my-[2.5rem] gap-12'>
                <div className='flex flex-col'>
                    <h3 className='mb-[1rem] header text-center lg:text-left'>What is HAALO?</h3>
                    <p className=" text-lg text-center lg:text-left">HAALO stems from an in-depth exploration of 4 organizational cultures (Adhocracy, Community, Hierarchy, Market), delineating various working styles, motivations, and other key aspects. Through this study, we've developed a comprehensive inventory of statements, focused through a people-centric perspective. This inventory offers insights into how individuals may align within an organization or specific roles.</p>
                    <img className='rounded-[6px] my-[2rem] w-[90%] lg:hidden mx-auto' src={Innovator} alt='Innovator Persona Card'></img>
                    <h3 className='mb-[1rem] mt-[1rem] header text-center lg:text-left'>The Personas:</h3>
                    <ul className='text-xl list-disc ml-[1.6rem]'>
                        <li className='mb-[1rem]'><b>Academic</b>: Relating to education and scholarship.</li>
                        <li className='mb-[1rem]'><b>Advocate</b>: A person who publicly supports or recommends a particular cause or policy.</li>
                        <li className='mb-[1rem]'><b>Analyst</b>: A detailed examination of anything complex in order to understand its nature or to determine its essential features. </li>
                        <li className='mb-[1rem]'><b>Broker</b>: A person who buys and sells goods or assets for others.</li>
                        <li className='mb-[1rem]'><b>Captain</b>: The person in command of the ship.</li>
                        <li className='mb-[1rem]'><b>Chameleon</b>: A person given to often expedient or facile change in ideas or character.</li>
                        <li className='mb-[1rem]'><b>Closer</b>: A person who is skilled at bringing a business transaction to a satisfactory conclusion.</li>
                        <li className='mb-[1rem]'><b>Consultant</b>: A person who provides expert advice professionally.</li>
                        <li className='mb-[1rem]'><b>Counselor</b>: A person trained to give guidance on personal, social, or psychological problems.</li>
                        <li className='mb-[1rem]'><b>Delegate</b>: A person sent or authorized to represent others, in particular an elected representative sent to a conference.</li>
                        <li className='mb-[1rem]'><b>Entrepreneur</b>: A person who organizes and operates a business or businesses, taking on  greater than normal financial risks in order to do so</li>
                        <li className='mb-[1rem]'><b>Envoy</b>: A messenger or representative, especially one on a diplomatic mission.</li>
                        <li className='mb-[1rem]'><b>General</b>: A commander of an army, or an army officer of very high rank.</li>
                        <li className='mb-[1rem]'><b>Hustler</b>: An aggressively enterprising person; a go-getter</li>
                        <li className='mb-[1rem]'><b>Innovator</b>: A person who introduces new methods, ideas, or products.</li>
                        <li className='mb-[1rem]'><b>Maverick</b>: An an unorthodox or independent-minded person</li>
                        <li className='mb-[1rem]'><b>Mercenary</b>: Primarily concerned with making money at the expense of ethics.</li>
                        <li className='mb-[1rem]'><b>Operative</b>: A worker, especially a skilled one.</li>
                        <li className='mb-[1rem]'><b>Playmaker</b>: A player in a team game who leads attacks or brings other players on the same side into a position from which they could score.</li>
                        <li className='mb-[1rem]'><b>Politician</b>: A a person who is professionally involved in politics, especially as a holder of or a candidate for an elected office.</li>
                        <li className='mb-[1rem]'><b>Surgeon</b>: A medical practitioner qualified to practice surgery.</li>
                        <li className='mb-[1rem]'><b>Trainer</b>: A person who teaches others, source of information.</li>
                    </ul>
                </div>
                <div className='justify-self-end'>
                    <img className='rounded-[6px] w-[550px] mb-[5rem] hidden lg:block ' src={Innovator} alt='Innovator Persona Card'></img>
                    <img className='rounded-[6px] w-[550px] mb-[5rem] hidden lg:block' src={Playmaker} alt='Playmaker Persona Card'></img>
                    <img className='rounded-[6px] w-[550px] mb-[5rem] hidden lg:block ' src={Operative} alt='Playmaker Persona Card'></img>
                    <img className='rounded-[6px] w-[550px] mb-[5rem] hidden lg:block xl:hidden ' src={Maverick} alt='Playmaker Persona Card'></img>
                </div>
                {/* <img className='w-[100%] justify-self-end rounded-[40px]' src={laptop}></img> */}
            </div>
    )
}