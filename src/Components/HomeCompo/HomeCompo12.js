import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'

// CSS
import './HomeCSS/HomeCompo12.css'

// Column 1
import Home12Icon1 from '../../Images/Home/Frame-171.png'
import Home12Icon2 from '../../Images/Home/Frame-170.png'
import Home12Icon3 from '../../Images/Home/Frame-168.png'
import Home12Icon4 from '../../Images/Home/Frame-169.png'

// Column 2
// importing reCaptcha
import ReCAPTCHA from "react-google-recaptcha";

const HomeS12Col1 =[
    {
        id : 1,
        image : Home12Icon1,
        heading : "200+",
        paragraph : "Solutions Delivered"
    },
    {
        id : 2,
        image : Home12Icon2,
        heading : "4 Million",
        paragraph : "Lives Benefited Till Date"
    },
    {
        id : 3,
        image : Home12Icon3,
        heading : "12 million",
        paragraph : "Litres of Water Generated Till Date"
    },
    {
        id : 4,
        image : Home12Icon4,
        heading : "50 million",
        paragraph : "Litres of Water Saved Till Date"
    }
]

const HomeCompo12 = () => {

    // AOS
    Aos.init();

    // for form submission and error message
    useEffect(() => {
        const form = document.querySelector('form');
        
        if (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault(); // Prevent form submission if invalid
            event.stopPropagation(); // Stop the event from propagating further
            }

            form.classList.add('was-validated'); // Apply Bootstrap validation styles
        });
        }
    }, []);  // Empty dependency array to ensure this effect runs only once

    // using reCaptcha
    function onChange(value) {
        console.log("Captcha value:", value);
    }

  return (
    <>
        <div className='container-fluid home-s12-container'>
            <h2 className='home-s12-heading'
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-once="true"
            >Our <span className='home-s12-highlight'>Impact Story</span></h2>

            <div className='row'>

                {/* Column 1 */}
                <div className='col-12 col-md-6 col-lg-6 home-s12-box-container-outside'>
                    <div>
                        {
                            HomeS12Col1.map( element =>{
                                return(
                                    <div className='home-s12-box-container' key={element.id}
                                    data-aos="fade"
                                    data-aos-duration="800"
                                    data-aos-once="true">
                                        <div className='home-s12-img-container'>
                                            <img className='home-s12-img' src={element.image} alt='Frame-.png' />
                                        </div>
                                        <div className='home-s12-txt-container'>
                                            <h3 className='home-s12-sm-heading'>{element.heading}</h3>
                                            <h5 className='home-s12-sm-para'>{element.paragraph}</h5>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* Column 2 */}
                <div className='col-12 col-md-6 col-lg-6 home-s12-col2-container'>

                    {/* Form */}
                    <div className='home-s12-col2-from-container'
                    data-aos="slide-left"
                    data-aos-duration="800"
                    data-aos-once="true">

                        {/* Heading */}
                        <h5 className='home-s12-col2-heading'>Which AWG model will work for you?</h5>

                        <form className="row g-0 needs-validation" noValidate>

                            {/* Name */}
                            <div className="col-md-12">
                                <label htmlFor="validationCustom01" className="home-s12-col2-form-label">Name</label>
                                <input type="text" className="form-control home-s12-col2-input" id="validationCustom01" placeholder="Enter Your Name*" required />
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="col-md-12">
                                <label htmlFor="validationCustom03" className="home-s12-col2-form-label">Phone Number</label>
                                <input type="tel" className="form-control home-s12-col2-input" id="validationCustom01" placeholder="Enter your Phone Number*" required />
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>

                            {/* E-Mail */}
                            <div className="col-md-12">
                                <label htmlFor="validationCustom02" className="home-s12-col2-form-label">EMail</label>
                                <input type="email" className="form-control home-s12-col2-input" id="validationCustom01" placeholder="Enter your E-mail*" required />
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>

                            {/* Consumption per day */}
                            <div className="col-md-12 col-lg-12">
                                <label htmlFor="validationCustom04" className="home-s12-col2-form-label">Consumption per day</label>
                                <select className="form-select home-s12-col2-input home-s12-col2-form-option" id="validationCustom04" required>
                                    <option className="home-s12-col2-form-option">--Please choose an option--</option>
                                    <option className="home-s12-col2-form-option">10 - 20 L</option>
                                    <option className="home-s12-col2-form-option">20 - 50 L</option>
                                    <option className="home-s12-col2-form-option">50 - 100 L</option>
                                    <option className="home-s12-col2-form-option">100 - 500 L</option>
                                    <option className="home-s12-col2-form-option">Above 500 L</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>

                            {/* Total members in the household */}
                            <div className="col-md-12 col-lg-12">
                                <label htmlFor="validationCustom04" className="home-s12-col2-form-label">Total members in the household</label>
                                <select className="form-select home-s12-col2-input home-s12-col2-form-option" id="validationCustom04" required>
                                    <option className="home-s12-col2-form-option">--Please choose an option--</option>
                                    <option className="home-s12-col2-form-option">0-1</option>
                                    <option className="home-s12-col2-form-option">1-5</option>
                                    <option className="home-s12-col2-form-option">5-15</option>
                                    <option className="home-s12-col2-form-option">15-20</option>
                                    <option className="home-s12-col2-form-option">20-30</option>
                                    <option className="home-s12-col2-form-option">Above 30</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>

                            {/* Location */}
                            <div className="col-md-12">
                                <label htmlFor="validationCustom01" className="home-s12-col2-form-label">Location</label>
                                <input type="text" className="form-control home-s12-col2-input" id="validationCustom01" placeholder="Enter Your Location*" required />
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>
                            
                            {/* ReCaptcha */}
                            <div className="col-12 home-s12-col2-captcha">
                                <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
                            </div>

                            {/* Contact Sales */}
                            <div className="mb-4 col-12">
                                <button className=" home-s12-col2-form-btn" type="submit">CONTACT SALES</button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>
        </div>
    </>
  )
}

export default HomeCompo12
