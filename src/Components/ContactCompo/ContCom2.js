import React from 'react'
import { useEffect } from 'react';

import './ContactCSS/ContCom2.css'

// importing reCaptcha
import ReCAPTCHA from "react-google-recaptcha";

const ContCom2 = () => {

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
        <div className='container-fluid cont-s2-container'>

            <div className='cont-s2-container-inside'>
                <form className="row g-0 needs-validation" noValidate>

                    {/* Name */}
                    <div className="col-md-12">
                        <label htmlFor="validationCustom01" className="form-label">Name:</label>
                        <input type="text" className="form-control cont-s2-input" id="validationCustom01" placeholder="Enter your name" required />
                        <div className="invalid-feedback">
                            Please fill out this field.
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="col-md-12">
                        <label htmlFor="validationCustom03" className="form-label">Phone:</label>
                        <input type="tel" className="form-control cont-s2-input" id="validationCustom01" placeholder="Enter your phone" required />
                        <div className="invalid-feedback">
                            Please fill out this field.
                        </div>
                    </div>

                    {/* E-Mail */}
                    <div className="col-md-12">
                        <label htmlFor="validationCustom02" className="form-label">E-Mail:</label>
                        <input type="email" className="form-control cont-s2-input" id="validationCustom01" placeholder="Enter your E-mail" required />
                        <div className="invalid-feedback">
                            Please fill out this field.
                        </div>
                    </div>

                    {/* Select Product: */}
                    <div className="col-6 col-md-5 col-lg-12">
                        <label htmlFor="validationCustom04" className="form-label">Select Product:</label>
                        <select className="form-select cont-s2-input cont-s2-form-option" id="validationCustom04" required>
                            <option className="cont-s2-form-option">--Please choose an option--</option>
                            <option className="cont-s2-form-option">Nero</option>
                            <option className="cont-s2-form-option">Bubble</option>
                            <option className="cont-s2-form-option">Drizzle</option>
                            <option className="cont-s2-form-option">Thunder</option>
                            <option className="cont-s2-form-option">Airwell</option>
                        </select>
                        <div className="invalid-feedback">
                            Please fill out this field.
                        </div>
                    </div>

                    <div className='col-md-12'></div>

                    {/* Message */}
                    <div className="col-6 col-md-5 col-lg-12 mb-3">
                        <label htmlFor="validationTextarea" className="form-label">Message:</label>
                        <textarea className="form-control cont-s2-txtarea" id="validationTextarea" placeholder="Message (Optional)"></textarea>
                    </div>

                    {/* ReCaptcha */}
                    <div className="col-12 col-md-12 col-lg-12">
                        <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
                    </div>

                    {/* Contact Sales */}
                    <div className="col-12 text-center text-md-start text-lg-center">
                        <button className=" cont-s2-form-btn" type="submit">CONTACT SALES</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default ContCom2
