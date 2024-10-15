import React from 'react'
import { NavLink } from 'react-router-dom'

// CSS
import './ContactCSS/ContCom3.css'

// Image
import ContS3img from '../../Images/Logo.png'

const ContCom3 = () => {
  return (
    <>
        {/* Copyright */}
        <div className='d-block d-nd-block d-lg-none'>

            <div className='cont-s3-cpy-container'>

                {/* Image */}
                <NavLink to='/'><img className='cont-s3-img' src={ContS3img} alt='Logo.png'/></NavLink>
                
                {/* Text */}
                <p className='cont-s3-cpy-txt'>All rights reserved</p>

            </div>
            
        </div>
    </>
  )
}

export default ContCom3
