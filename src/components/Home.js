import React from 'react';
import Footer from './Footer.js'
import Header from './Header.js';

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
            <p className="text-center text-lg max-w-[50rem]">Each of us have preferences, experiences, and values that impact how we show up professionally. HAALO allows us to better understand individuals beyond their resume and your needs beyond a job description to help predict potential and launch successful careers for your team.</p>
        </div>
    )
}

const AboutHAALO = () => {
    return (
        <div>
            <h3 className='mb-[1rem] header text-center'>What is HAALO?</h3>
            <p className=" text-lg text-center mx-auto max-w-[50rem]">HAALO stems from an in-depth exploration of 4 organizational cultures (Adhocracy, Community, Hierarchy, Market), delineating various working styles, motivations, and other key aspects. Through this study, we've developed a comprehensive inventory of statements, focused through a people-centric perspective. The results provide insight into how an individual’s underlying preferences and traits translate into their potential to succeed in a specific work environment and position.  </p>
                <div className='lg:grid grid-cols-2 my-[2.5rem] xl:mx-auto xl:max-w-[55rem] lg:gap-[1rem] mb-[2rem]'>
                        <div className='bg-companyGray p-[1rem] lg:rounded-[0.3rem] px-[1.8rem] mx-auto'>
                            <h3 className='header font-bold text-center'>ADHOCRACY</h3>
                            <p className='text-xl text-center my-[0.3rem] mx-6'>Dynamic, entrepreneurial create culture</p>
                            <div className='bg-black h-[1px] mt-2'></div>
                            <p className='text-lg my-[0.3rem]'>Related Personas:</p>
                            <ul className='list-disc ml-[1rem]'>
                                <li className='text-companyTeal'><p className='text-black'>Innovator</p></li>
                                <li className='text-companyTeal'><p className='text-black'>Advocate</p></li>
                                <li className='text-companyTeal'><p className='text-black'>Entrepreneur</p></li>
                                <li className='text-companyTeal'><p className='text-black'>Surgeon</p></li>
                                <li className='text-companyTeal'><p className='text-black'>Politician</p></li>          
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
                                <li className='text-white'><p className='text-black'>Trainer</p></li>
                                <li className='text-white'><p className='text-black'>Closer</p></li>
                                <li className='text-white'><p className='text-black'>Analyst</p></li>
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
                                <li className='text-black'><p className='text-white'>Delegate</p></li>
                                <li className='text-black'><p className='text-white'>Counselor</p></li>
                                <li className='text-black'><p className='text-white'>Academic</p></li>
                                <li className='text-black'><p className='text-white'>Operative</p></li>          
                                <li className='text-black'><p className='text-white'>Chameleon</p></li>          
                            </ul>             
                        </div>
                        <div className='bg-black p-[1rem] text-white lg:rounded-[0.3rem] px-[1.8rem] mx-auto'>
                            <h3 className='header font-bold text-white  text-center'>MARKET</h3>
                            <p className='text-xl text-center my-[0.3rem]'>Results-oriented, competitive driven culture</p>
                            <div className='bg-companyTeal h-[1px] mt-2'></div>
                            <p className='text-lg my-[0.3rem]'>Related Personas:</p>
                            <ul className='list-disc ml-[1rem]'>
                                <li className='text-companyTeal'><p className='text-white'>Hustler</p></li>
                                <li className='text-companyTeal'><p className='text-white'>Maverick</p></li>
                                <li className='text-companyTeal'><p className='text-white'>Playmaker</p></li>
                                <li className='text-companyTeal'><p className='text-white'>Broker</p></li>
                                <li className='text-companyTeal'><p className='text-white'>Envoy</p></li>          
                                <li className='text-companyTeal'><p className='text-white'>Mercenary</p></li>          
                            </ul>             
                        </div>                    
                </div>
        </div>
    )
}