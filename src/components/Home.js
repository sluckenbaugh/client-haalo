import React from 'react';
import Footer from './Footer.js'
import Header from './Header.js';

const Home = () => {
    const images = require.context('../_img/cards/v2', true);
    const imageList = images.keys().map(image => images(image));
    
    return (
        <div className='bg-companyBlue'>
            <Header />
            <div id="step1" className="container">
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
                <WelcomeMessage />

                {/* Image Carousel */}
                <div className="scroll imgBox" style={{'--time': '120s'}}>
                    <div>
                        {imageList.map((card, index) => (
                            <img src={card} key={index} alt=''/>
                        ))}
                    </div>
                    <div>
                        {imageList.map((card, index) => (
                            <img src={card} key={index} alt=''/>
                        ))}
                    </div>
                </div>

                <br />
                <a href="/test"><button name="starttest" value="Take The Halo Test" className="button">Launch the HAALO Inventory</button></a>
                <br /><br /><br />
                <AboutHAALO />
                <br />
                
                <table className="culturegrid">
                    <thead>
                        <tr>
                            <td></td>
                            <td className="culturegrid_topbottomrow">The Chameleon</td>
                            <td></td>
                        </tr>
                    </thead>
                    
                    {/* Left column */}
                    <thead>
                        <tr>
                            <td className='culturegraph_middlerow'>
                                The Captain
                                <br></br>
                                The Delegate
                                <br></br>
                                The Counselor
                                <br></br>
                                The Academic
                                <br></br>
                                The Operative
                            </td>

                            <td rowSpan='2'>
                                <img src="https://haalo.avenica.com/_img/culturegraph.png" width="500px" alt="" />
                            </td>

                            <td className="culturegraph_middlerow">
                                The Innovator
                                <br></br>
                                The Advocate
                                <br></br>
                                The Entrepreneur
                                <br></br>
                                The Surgeon
                                <br></br>
                                The Politician
                                <br></br>
                            </td>
                        </tr>

                    {/* Right column */}
                        <tr>
                            <td>
                                The General
                                <br></br>
                                The Closer
                                <br></br>
                                The Analyst
                                <br></br>
                                The Consultant
                                <br></br>
                            </td>

                            <td>
                            The Hustler
                                <br></br>
                                The Maverick
                                <br></br>
                                The Playmaker
                                <br></br>
                                The Broker
                                <br></br>
                                The Envoy
                                <br></br>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="culturegrid_topbottomrow">The Mercenary</td>
                            <td></td>
                        </tr>
                    </thead>
                </table>
                <br />
            </div>
            <Footer />
        </div>
    );
}

export default Home;

const WelcomeMessage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-[130px]'>
            <br />
            <h2 className='title1'>Welcome to HAALO</h2>
            <p className="instructions">Whether it's making a difference, being part of a team or seeing your name in lights, each of us have preferences and undeniable quirks that simply cannot be captured by a resume. HAALO allows us to better understand who you are, what you want, and how we can help.</p>
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