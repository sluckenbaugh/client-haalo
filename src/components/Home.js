import React from 'react';
import Footer from './Footer.js'
import Header from './Header.js';
import { Link } from 'react-router-dom'

const Home = () => {
    
    return (
        <div className='bg-companyGray'>
            <Header />
            <main className='md:px-[6rem]'>
                <div className=" bg-white md:px-[7rem] py-[3rem] md:my-[1.5rem] md:rounded-[8px] grid">             
                    <WelcomeMessage />
                    <Link to='/form' className='justify-self-center mt-[2rem]'><button name="starttest" value="Take The Halo Test" className="button">Launch The HAALO Inventory</button></Link>
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
        <div className='w-[75%] md:w-[90%] lg:w-[50%] mx-auto'>
            <h2 className='mb-[1rem] mt-[-1rem] header text-center'>Welcome to HAALO</h2>
            <p className="text-center text-lg max-w-[50rem]">Each of us have preferences, experiences, and values that impact how we show up professionally. HAALO allows us to better understand individuals beyond their resume and your needs beyond a job description to help predict potential and launch successful careers for your team.</p>
        </div>
    )
}

const AboutHAALO = () => {
    return (
        <div>
            <h3 className='mb-[1rem] header text-center'>What is HAALO?</h3>
            <p className=" text-lg text-center mx-auto max-w-[50rem]">HAALO stems from an in-depth exploration of four organizational cultures (Adhocracy, Community, Hierarchy, Market), delineating various working styles, motivations, and other key aspects. Through this study, we've developed a comprehensive inventory of statements, focused through a people-centric perspective. The results provide insight into how an individual’s underlying preferences and traits translate into their potential to succeed in a specific work environment and position.  </p>
                <div className='lg:grid grid-cols-2 my-[2.5rem] xl:mx-auto xl:max-w-[55rem] lg:gap-[1rem] mb-[2rem]'>
                        <div className='bg-companyGray p-[1rem] lg:rounded-[0.3rem] px-[1.8rem] mx-auto'>
                            <h3 className='header font-bold text-center'>ADHOCRACY</h3>
                            <p className='text-xl text-center my-[0.3rem] mx-6'>Dynamic, entrepreneurial create culture</p>
                            <div className='bg-black h-[1px] mt-2'></div>
                            <p className='text-lg my-[0.3rem]'>Related Personas:</p>
                            <ul className='list-disc ml-[1rem]'>
                                <li className='text-companyTeal'><p className='text-black'>Pioneer</p></li>
                                <li className='text-companyTeal'><p className='text-black'>Advocate</p></li>
                                <li className='text-companyTeal'><p className='text-black'>Entrepreneur</p></li>
                                <li className='text-companyTeal'><p className='text-black'>Navigator</p></li>
                                <li className='text-companyTeal'><p className='text-black'>Diplomat</p></li>          
                                <li className='text-companyTeal'><p className='text-black'>Chameleon</p></li>          
                            </ul>             
                        </div>
                        <div className='bg-companyTeal p-[1rem] lg:rounded-[0.3rem] px-[1.8rem] mx-auto'>
                            <h3 className='header font-bold text-center'>HIERARCHY</h3>
                            <p className='text-xl text-center my-[0.3rem] '>Process-oriented, structured control culture</p>
                            <div className='bg-black h-[1px] mt-2'></div>
                            <p className='text-lg my-[0.3rem]'>Related Personas:</p>
                            <ul className='list-disc ml-[1rem]'>
                                <li className='text-white'><p className='text-black'>General</p></li>
                                <li className='text-white'><p className='text-black'>Guardian</p></li>
                                <li className='text-white'><p className='text-black'>Closer</p></li>
                                <li className='text-white'><p className='text-black'>Scientist</p></li>
                                <li className='text-white'><p className='text-black'>Consultant</p></li>          
                                <li className='text-white'><p className='text-black'>Mercenary</p></li>          
                            </ul>             
                        </div>
                        <div className='bg-companyPurple text-white p-[1rem] lg:rounded-[0.3rem] px-[1.8rem] mx-auto'>
                            <h3 className='header text-white font-bold  text-center'>COMMUNITY</h3>
                            <p className='text-xl text-center my-[0.3rem]'>People oriented, friendly collaborative culture</p>
                            <div className='bg-black h-[1px] mt-2'></div>
                            <p className='text-lg my-[0.3rem]'>Related Personas:</p>
                            <ul className='list-disc ml-[1rem]'>
                                <li className='text-black'><p className='text-white'>Captain</p></li>
                                <li className='text-black'><p className='text-white'>Champion</p></li>
                                <li className='text-black'><p className='text-white'>Counselor</p></li>
                                <li className='text-black'><p className='text-white'>Scholar</p></li>
                                <li className='text-black'><p className='text-white'>Promoter</p></li>          
                                <li className='text-black'><p className='text-white'>Chameleon</p></li>          
                            </ul>             
                        </div>
                        <div className='bg-black p-[1rem] text-white lg:rounded-[0.3rem] px-[1.8rem] mx-auto'>
                            <h3 className='header font-bold text-white  text-center'>MARKET</h3>
                            <p className='text-xl text-center my-[0.3rem]'>Results-oriented, competitive driven culture</p>
                            <div className='bg-companyTeal h-[1px] mt-2'></div>
                            <p className='text-lg my-[0.3rem]'>Related Personas:</p>
                            <ul className='list-disc ml-[1rem]'>
                                <li className='text-companyTeal'><p className='text-white'>Playmaker</p></li>
                                <li className='text-companyTeal'><p className='text-white'>Striver</p></li>
                                <li className='text-companyTeal'><p className='text-white'>Negotiator</p></li>
                                <li className='text-companyTeal'><p className='text-white'>Strategist</p></li>
                                <li className='text-companyTeal'><p className='text-white'>Interpreter</p></li>          
                                <li className='text-companyTeal'><p className='text-white'>Mercenary</p></li>          
                            </ul>             
                        </div>                    
                </div>
        </div>
    )
}