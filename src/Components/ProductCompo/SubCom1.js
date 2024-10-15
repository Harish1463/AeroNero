import React from 'react'
import { NavLink } from 'react-router-dom'

// AOS
import aos from 'aos'

// CSS
import './ProductCSS/SubCom1.css'

const SubCom1 = ({heading1, image1, paragraph1, paragraph2, button, image2, image3, backgroundImage}) => {

    // AOS
    aos.init();

  return (
    <>
        <div className='container-fluid sub-s1-container'>

            {/* Background Image */}
            <div>
                <img className='sub-s1-background' src={backgroundImage} alt='blue-bg.png'/>
            </div>
            
            <div className='row sub-s1-row-container-outside'>

                {/* Column 1 */}
                <div className='col-12 col-md-6 col-lg-6 sub-s1-c1-container'>

                    {/* Heading */}
                    <div className='sub-s1-heading-container'
                    data-aos="fade-down"
                    data-aos-delay="800"
                    data-aos-duration="800"
                    data-aos-once="true">
                        <h3 className='sub-s1-heading'>{heading1}</h3>
                        <div>
                            <img className='sub-s1-head-img' src={image1} alt='4.9-star.png'/>
                        </div>
                        
                    </div>

                    {/* Paragraph 1 */}
                    <p className='sub-s1-para1'>{paragraph1}</p>

                    {/* Paragraph 2 */}
                    <p className='sub-s1-para2'>{paragraph2}</p>

                    {/* Button */}
                    <div className='text-center text-md-start pt-4'>
                        <NavLink className='sub-s1-btn' to='/contact'>{button}</NavLink>
                    </div>

                </div>

                {/* Column 2 */}
                <div className='col-11 col-md-5 col-lg-5 sub-s1-c2-container'>
                    <img className='sub-s1-c2-img' src={image2} alt='Product-Nero.png' />
                </div>

                {/* Column 3 */}
                <div className='col-1 col-md-1 col-lg-1 sub-s1-c3-container'>
                    <img className='sub-s1-c3-img' src={image3} alt='NERONERO-Vertical.png'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default SubCom1