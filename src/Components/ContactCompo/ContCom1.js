import React from 'react'

// CSS
import './ContactCSS/ContCom1.css'

const ContCom1 = () => {
  return (
    <>
        <div className='cont-s1-container'>

            <div className='cont-s1-container-inside'>
                <h2 className='cont-s1-heading'>Contact Us</h2>
                <p className='cont-s1-para'>Are you a water warrior? We'd love to hear from you! Reach out to us for inquiries, partnerships, and collaboration.</p>

                
                <div className='cont-s1-info-container-outside'>
                    {/* E-Mail */}
                    <a className='cont-s1-info-container' href='mailto: hello@aeronero.com'><i className="fa-solid fa-envelope cont-s1-icon"></i><span className='cont-s1-info'>hello@aeronero.com</span></a>

                    {/* Phone */}
                    <a className='cont-s1-info-container' href='tel: +18004194190'><i className="fa-solid fa-phone cont-s1-icon"></i><span className='cont-s1-info'>+1800 419 4190</span></a>
                </div>

                <div className='cont-s1-social-container'>
                    <a className='cont-s1-social-icon-container' href='https://www.instagram.com/aeronero.life/' target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram cont-s1-social"></i></a>
                    <a className='cont-s1-social-icon-container' href='https://www.youtube.com/@aeronero6604' target='_blank' rel="noreferrer"><i className="fa-brands fa-youtube cont-s1-social"></i></a>
                    <a className='cont-s1-social-icon-container' href='https://www.linkedin.com/in/aeronero/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in' target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin cont-s1-social"></i></a>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default ContCom1
