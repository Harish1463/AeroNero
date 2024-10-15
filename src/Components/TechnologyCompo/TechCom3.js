import React from 'react'

import './TechCSS/TechCom3.css'

// Iamge
import TechS3BoxImg from '../../Images/Technology/Technology-image.png'

const TechCom3 = () => {
  return (
    <>
        <div className='container-fluid tech-s3-container'>

            {/* Heading */}
            <h2 className='tech-s3-heading'>Our commitment <span className='tech-s3-highlight'>to purity</span></h2>

            {/* Box */}
            <div className='row tech-s3-box-container'>

                
                <div className='col-12 col-md-12 col-lg-8 tech-s3-box'>

                    <div className='tech-s3-box-c1'>

                        {/* Paragraph */}
                        <p className='tech-s3-para'>Aeronero's atmospheric water generation technology ensures the highest standards of water quality. Every drop of water produced by our systems undergoes rigorous testing and filtration to eliminate impurities and contaminants.</p>

                        {/* Button */}
                        <div className='tech-s3-btn-container'>
                            <a className='tech-s3-btn' href='https://aeronero.life/wp-content/uploads/2024/09/Aeronero-Solutions-2502917-001-26.08.2024-1.pdf' target='_blank' rel="noreferrer">read our water quality report</a>
                        </div>

                    </div>

                    {/* Image */}
                    <img className='tech-s3-img' src={TechS3BoxImg} alt='Technology-image.png' />

                </div> 

            </div>
        </div>
    </>
  )
}

export default TechCom3
