import React from 'react'
import { useEffect } from 'react';

// CSS
import './Footer.css'

// importing reCaptcha
import ReCAPTCHA from "react-google-recaptcha";

const Footer = () => {

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
      <div className='container-fluid'>

        <div className='row foot-r1-container'>

            {/* Column 1 */}
            <div className='col-12 col-md-7 col-lg-7 foot-r1-c1-container'>

                {/* Element 1 */}
                <div>
                    <h2 className='foot-heading'>Are you a water warrior?</h2>
                    <p className='foot-para'>We would love to hear from you! Reach out to us for inquiries, partnerships, and collaboration.</p>
                </div>
            

                {/* Element 2 */}
                <div>
                        
                    {/* Phone */}
                    <div className='col-lg-12'>
                        <h5 className='foot-info-heading'>Call Us at:</h5>
                        <div>
                            <a className='foot-info-icon-container' href='tel: +18004194190'><i className="fa-solid fa-phone foot-info-icon"></i></a>
                            <a className='foot-info-txt' href='tel: +18004194190'>+1800 419 4190</a>
                        </div>
                    </div>

                    <div className='row'>

                        {/* Email */}
                        <div className='col-lg-6'>
                            <h5 className='foot-info-heading'>Write us at:</h5>
                            <div>
                                <a className='foot-info-icon-container' href='tel: +18004194190'><i className="fa-solid fa-envelope foot-info-icon"></i></a>
                                <a className='foot-info-txt' href='mailto: hello@aeronero.com'>hello@aeronero.com</a>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className='col-md-12 col-lg-4 foot-social-container'>
                            <h3 className='foot-social-txt'>Social:</h3>
                                
                            {/* Icons */}
                            <div>
                                <a className='foot-media-icon-container' href='https://www.instagram.com/aeronero.life/'>
                                    <i className="fa-brands fa-instagram foot-media-icon"></i>
                                </a>

                                <a className='foot-media-icon-container' href='https://www.youtube.com/@aeronero6604'>
                                    <i className="fa-brands fa-youtube foot-media-icon"></i>
                                </a>
                                
                                <a className='foot-media-icon-container' href='https://www.linkedin.com/in/aeronero/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in'>
                                    <i className="fa-brands fa-linkedin foot-media-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>

            {/* Column 2 */}
            <div className='col-12 col-md-5 col-lg-5 foot-r1-c2-container'>

                {/* Form */}
                <div className='foot-r1-from-container'>

                    <form className="row g-0 needs-validation" noValidate>

                        {/* Name */}
                        <div className="col-md-12">
                            <label htmlFor="validationCustom01" className="form-label">Name:</label>
                            <input type="text" className="form-control foot-r1-input" id="validationCustom01" placeholder="Enter your name" required />
                            <div className="invalid-feedback">
                                Please fill out this field.
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="col-md-12">
                            <label htmlFor="validationCustom03" className="form-label">Phone:</label>
                            <input type="tel" className="form-control foot-r1-input" id="validationCustom01" placeholder="Enter your phone" required />
                            <div className="invalid-feedback">
                                Please fill out this field.
                            </div>
                        </div>

                        {/* E-Mail */}
                        <div className="col-md-12">
                            <label htmlFor="validationCustom02" className="form-label">E-Mail:</label>
                            <input type="email" className="form-control foot-r1-input" id="validationCustom01" placeholder="Enter your E-mail" required />
                            <div className="invalid-feedback">
                                Please fill out this field.
                            </div>
                        </div>

                        {/* Select Product: */}
                        <div className="col-md-12 col-lg-9">
                            <label htmlFor="validationCustom04" className="form-label">Select Product:</label>
                            <select className="form-select foot-r1-input foot-r1-form-option" id="validationCustom04" required>
                                <option className="foot-r1-form-option">--Please choose an option--</option>
                                <option className="foot-r1-form-option">Nero</option>
                                <option className="foot-r1-form-option">Bubble</option>
                                <option className="foot-r1-form-option">Drizzle</option>
                                <option className="foot-r1-form-option">Thunder</option>
                                <option className="foot-r1-form-option">Airwell</option>
                            </select>
                            <div className="invalid-feedback">
                                Please fill out this field.
                            </div>
                        </div>

                        {/* Message */}
                        <div className="col-md-12 col-lg-9 mb-3">
                            <label htmlFor="validationTextarea" className="form-label">Message:</label>
                            <textarea className="form-control foot-r1-txtarea" id="validationTextarea" placeholder="Message (Optional)"></textarea>
                        </div>
                        
                        {/* ReCaptcha */}
                        <div className="col-12">
                            <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
                        </div>

                        {/* Contact Sales */}
                        <div className="col-12 text-center">
                            <button className=" foot-r1-form-btn" type="submit">CONTACT SALES</button>
                        </div>
                    </form>

                </div>

            </div>

        </div>

        {/* Copyright */}
        <div className='foot-cpy-container'>
            <p className='foot-cpy-txt'>Aeronero Solution Pvt. Ltd.</p>
            <p className='foot-cpy-txt'>All rights reserved.</p>
        </div>

      </div>
    </>
  )
}

export default Footer
