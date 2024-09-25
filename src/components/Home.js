import React from 'react';
import Footer from './Footer.js'
import Header from './Header.js';
import laptop from '../_img/laptop.jpg'

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
                    <p className=" text-lg">HAALO stems from an in-depth exploration of 4 organizational cultures (outlined below), delineating various working styles, motivations, and other key aspects. Through this study, we've developed a comprehensive inventory of statements, focused through a people-centric perspective. This inventory offers insights into how individuals may align within an organization or specific roles.</p>
                </div>
                <img className='w-[100%] justify-self-end rounded-[40px]' src={laptop}></img>
            </div>
    )
}