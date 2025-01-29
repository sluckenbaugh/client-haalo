import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Form() {

    // Start at top of screen
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    const navigate = useNavigate()
    const [office, setOffice] = useState(false)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        position: '',
        industry: '',
        environment: '',
        city: '',
        state: '',
        zip: ''
    });

    
    const handleInput = (e) => {
        const {value, name} = e.target
        e.preventDefault() 
        if (value === 'Hybrid' || value === 'In-Office') {
            setOffice(true)
        }
        else if (value === 'Remote') {
            setOffice(false)
        }
        setFormData({
            ...formData,
            [name]: name === 'email' ? value.toLowerCase() : value
        })
    }


    const validEmail = () => {
            const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return re.test(String(formData.email).toLowerCase());
        }


    const takeToTest = (e) => {
        e.preventDefault()
        // Validate form and navigate to questions page with user object

        if (validEmail()) {
                const user = {firstName: formData.firstName[0].toUpperCase() + formData.firstName.slice(1), 
                            lastName: formData.lastName[0].toUpperCase() + formData.lastName.slice(1), 
                            email: formData.email,
                            company: formData.company, 
                            position: formData.position.toLowerCase(),
                            industry: formData.industry,
                            environment: formData.environment,
                            city: formData.city,
                            state: formData.state,
                            zip: formData.zip}

                navigate('/test', { state: { user } })            
            }
    }

    return (
        <div className="bg-companyGray">
            <Header />
            <main className="md:mx-[6rem]">
                <div className="bg-white px-[2rem] md:px-[7rem] py-[3rem] mt-[1.5rem] md:my-[1.5rem] md:rounded-[8px] grid justify-center">
                    <div className='flex justify-center mb-[2rem]'>
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
                    <form className='grid' onSubmit={takeToTest}>
                        {/* <input type="hidden" name="subject" value="HAALO Results Submission" />
                            <input type="hidden" name="recipient" value="haalo@avenica.com" /> */}
                            <h3 className='text-companyBlue text-[28px] mb-[1rem] mx-[0.5rem] md:mx-[5rem] max-w-[20rem] text-center'>Please provide the following information.</h3>
                            <div className="question mt-[1rem]">
                                <label htmlFor="firstName">First Name</label>
                                <input className='input' type="text" required="required"onChange={handleInput} id="firstName" name="firstName" value={formData.firstName} />
                            </div>
                            <div className="question">
                                <label htmlFor="lastName">Last Name</label>
                                <input className='input' type="text" required="required" onChange={handleInput} id="lastName" name="lastName" value={formData.lastName}/>
                            </div>
                            <div className="question">
                                <label htmlFor="email">Company Email Address</label>
                                <input className='input' type="email" required="required" value={formData.email} onChange={handleInput} id="email" name="email" />
                            </div>
                            <div className="question">
                                <label htmlFor="company">Company Name</label>
                                <input className='input' type="text" required="required" onChange={handleInput} id="company" name="company" value={formData.company}/>
                            </div>
                            <div className="question">
                                <label htmlFor="position">Position Hiring For</label>
                                <input className='input' type="text" required="required" onChange={handleInput} id="position" name="position" value={formData.position}/>
                            </div>

                            <div className="question">
                                <label htmlFor="industry">Industry</label>
                                <select className="input" id="industry" name="industry" required='required' onChange={handleInput}>
                                    <option value=''>-- Please Select One --</option>
                                    <option value='Agriculture, Forestry and Fishing'>Agriculture, Forestry and Fishing</option>
                                    <option value='Banking, Finance'>Banking, Finance</option>
                                    <option value='Biotech, Pharmaceuticals, Medicine'>Biotech, Pharmaceuticals, Medicine</option>
                                    <option value='Chemicals'>Chemicals</option>
                                    <option value='Construction, Civil'>Construction, Civil</option>
                                    <option value='Consulting'>Consulting</option>
                                    <option value='Consumer Services'>Consumer Services</option>
                                    <option value='Education'>Education</option>
                                    <option value='Energy, Utilities'>Energy, Utilities</option>
                                    <option value='Entertainment'>Entertainment</option>
                                    <option value='Environmental Services'>Environmental Services</option>
                                    <option value='Food, Beverage'>Food, Beverage</option>
                                    <option value='Healthcare (Clinical)'>Healthcare (Clinical)</option>
                                    <option value='Hospitality, Tourism'>Hospitality, Tourism</option>
                                    <option value='Insurance'>Insurance</option>
                                    <option value='IT, High Tech'>IT, High Tech</option>
                                    <option value='Manufacturing'>Manufacturing</option>
                                    <option value='Metals, Steel Distribution'>Metals, Steel Distribution</option>
                                    <option value='Mining, Drilling'>Mining, Drilling</option>
                                    <option value='Not for Profit'>Not for Profit</option>
                                    <option value='Public Sector, Government'>Public Sector, Government</option>
                                    <option value='Real Estate'>Real Estate</option>
                                    <option value='Retail (Stores)'>Retail (Stores)</option>
                                    <option value='Security Services'>Security Services</option>
                                    <option value='Staffing, Recruiting, HR Services'>Staffing, Recruiting, HR Services</option>
                                    <option value='Supply Chain, Logistics'>Supply Chain, Logistics</option>
                                    <option value='Telecommunications'>Telecommunications</option>
                                    <option value='Other'>Other</option>
                                </select>
                            </div>

                            <div className="question">
                                <label htmlFor="environment">Work Environment</label>
                                <select className="input mb-[1rem]" id='environment' name='environment' required='required' onChange={handleInput}>
                                    <option value=''>-- Please Select One --</option>
                                    <option value='Remote'>Remote</option>
                                    <option value='Hybrid'>Hybrid</option>
                                    <option value='In-Office'>In-Office</option>
                                </select>
                            </div>

                            {/* If work env is not remote */}
                            {office && 
                                <div className="location">
                                    <label htmlFor='city'>City</label>
                                    <input className="input mb-[1rem]" required='required' id="city" name="city" value={formData.city} onChange={handleInput}/>
                                    <label htmlFor='state'>State</label>
                                    <input className="input mb-[1rem]" required='required' id="state" name="state" value={formData.state} onChange={handleInput}/>
                                    <label htmlFor='zip'>ZIP Code</label>
                                    <input className="input mb-[1rem]" required='required' id="zip" name="zip" value={formData.zip} onChange={handleInput}/>
                                </div> 
                            }

                            <button className='button justify-self-center' type="submit">Take HAALO</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}