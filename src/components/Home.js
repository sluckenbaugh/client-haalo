import React from 'react';
import Footer from './Footer.js'
import Header from './Header.js';

const Home = () => {
    // const images = require.context('../_img/cards/v2', true);
    // const imageList = images.keys().map(image => images(image));
    
    return (
        <div className='bg-companyGray'>
            <Header />
            <div id="step1" className="bg-white px-[7rem] py-[3rem] m-[1.5rem] rounded-[8px]">
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
            </div>

                <a href="/test"><button name="starttest" value="Take The Halo Test" className="button">Launch the HAALO Inventory</button></a>
                <br /><br /><br />
                <AboutHAALO />
            <Footer />
        </div>
    );
}

export default Home;

const WelcomeMessage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-[130px]'>
            <br />
            <h2 className=''>Welcome to HAALO</h2>
            <p className="text-center">Whether it's making a difference, being part of a team or seeing your name in lights, each of us have preferences and undeniable quirks that simply cannot be captured by a resume. HAALO allows us to better understand who you are, what you want, and how we can help.</p>
        </div>
    )
}

const AboutHAALO = () => {
    return (
        <div className='flex flex-col items-center justify-center h-[130px]'>
            <br />
            <h3 className='title2'>About the HAALO Persona Inventory</h3>
            <p className="instructions">HAALO stems from an in-depth exploration of 4 organizational cultures (outlined below), delineating various working styles, motivations, and other key aspects. Through this study, we've developed a comprehensive inventory of statements, focused through a people-centric perspective. This inventory offers insights into how individuals may align within an organization or specific roles.</p>
        </div>
    )
}