import React, {useState} from "react";
import { useNavigate } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Form() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        position: ''
    });

    
    const handleChange = (e) => {
        const {value, name} = e.target
        e.preventDefault() 
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
        // Validate form
        if (validEmail() 
            && formData.firstName
            && formData.lastName
            && formData.company
            && formData.position) {
                const user = {firstName: formData.firstName[0].toUpperCase() + formData.firstName.slice(1), 
                            lastName: formData.lastName[0].toUpperCase() + formData.lastName.slice(1), email: formData.email,
                            company: formData.company, position: formData.position.toLowerCase()}

                navigate('/test', { state: { user } })            
            }
    }

    return (
        <div className="bg-companyGray">
            <Header />
            <main className="md:mx-[6rem]">
                <div id="step1" className=" bg-white md:px-[7rem] py-[3rem] md:my-[1.5rem] md:rounded-[8px] grid">
                        <div className='flex justify-center'>
                            <div className="flex justify-between w-[16rem] md:w-[20rem] items-center">
                                <div className="step_unselected">
                                    <p className='step_num'>Step 1</p>
                                </div>
                                <div className="step_line" />
                                <div className="step_selected">
                                    <p className='step_num'>Step 2</p>
                                </div>
                                <div className="step_line" />
                                <div className="step_unselected">
                                    <p className='step_num'>Step 3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="bg-white px-[2rem] md:px-[7rem] py-[3rem] mt-[1.5rem] md:my-[1.5rem] md:rounded-[8px] grid justify-center">
                    <form className='grid' onSubmit={takeToTest}>
                        <input type="hidden" name="subject" value="HAALO Results Submission" />
                            <input type="hidden" name="recipient" value="haalo@avenica.com" />
                            <h3 className='text-companyBlue text-[28px] mb-[1rem] mx-[0.5rem] md:mx-[5rem] text-center'>Please provide the following information.</h3>
                            <div className="question mt-[1rem]">
                                <label htmlFor="firstName">First Name</label>
                                <input className='input' type="text" required="required" onChange={handleChange} id="firstName" name="firstName" value={formData.firstName} />
                            </div>
                            <div className="question">
                                <label htmlFor="lastName">Last Name</label>
                                <input className='input' type="text" required="required"  onChange={handleChange} id="lastName" name="lastName" value={formData.lastName}/>
                            </div>
                            <div className="question">
                                <label htmlFor="email">Company Email Address</label>
                                <input className='input' type="text" required="required" value={formData.email} onChange={handleChange} id="email" name="email" />
                            </div>
                            <div className="question">
                                <label htmlFor="company">Company Name</label>
                                <input className='input' type="text" required="required"  onChange={handleChange} id="company" name="company" value={formData.company}/>
                            </div>
                            <div className="question mb-[2.5rem]">
                                <label htmlFor="position">Position Hiring For</label>
                                <input className='input' type="text" required="required"  onChange={handleChange} id="position" name="position" value={formData.position}/>
                            </div>

                            <button className='button justify-self-center' type="submit">Submit</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}