import React from 'react'
import { NavLink } from 'react-router-dom'

// AOS
import Aos from 'aos'

// CSS
import './HomeCSS/HomeCompo3.css'

// Images
import homeS3img1 from '../../Images/Home/Image1.png'
import homeS3img2 from '../../Images/Home/Image2.png'
import homeS3img3 from '../../Images/Home/Image3.png'
import homeS3img4 from '../../Images/Home/Image4.png'

const HomeCompo3 = () => {

    // AOS
    Aos.init();

  return (
    <>
      <div className='container-fluid home-s3-container'>

        <div className='row'>

            {/* Column 1 */}
            <div 
            data-aos="slide-right"
            data-aos-duration="2000"
            data-aos-once="ture"
            className='col-12 col-lg-6 home-s3-col1-container'>
                
                {/* Heading 1 */}
                <h5 className='home-s3-heading1'>Our vision</h5>
                
                {/* Heading 2 */}
                <h2 className='home-s3-heading2'>Water for all, always</h2>
                
                {/* Paragraph */}
                <p className='home-s3-para'>Empowering sustainable living through innovative air water generation technology, providing clean and accessible water to communities while combating climate change.</p>

                {/* Button */}
                    <div className='home-s3-btn-container'>
                        <NavLink className='home-s3-btn' to='/Contact'>chat with our export</NavLink>
                    </div>
            </div>
           
            {/* Column 2 */}
        
            <div className='col-12 col-lg-6 home-s3-col2-container'>

                {/* Our Mission */}
                <h4 className='home-s3-mobilee-txt'>Our Mission</h4>

                {/* Row 1 */}
                <div className='row home-s3-col-2-row'>
                    {/* Iamge 1 */}
                    <div className='col-12 col-md-5 home-s3-card'>
                        <div className='home-s3-img-container'>
                            <img className='homeS3img' src={homeS3img1} alt='Image1.png' />
                        </div>
                        <p className='homeS3-sm-para'>Clean, accessible water for all leading to water equality</p>
                    </div>

                    {/* Iamge 2 */}
                    <div className='col-12 col-md-5 home-s3-card'>
                        <div className='home-s3-img-container'>
                            <img className='homeS3img' src={homeS3img2} alt='Image2.png' />
                        </div>
                        <p className='homeS3-sm-para'>Water Independence with affordability</p>
                    </div>

                </div>

                {/* Row 2 */}
                <div className='row home-s3-col-2-row'>
                    {/* Iamge 3 */}
                    <div className='col-12 col-md-5 home-s3-card'>
                        <div className='home-s3-img-container'>
                            <img className='homeS3img' src={homeS3img3} alt='Image3.png' />
                        </div>
                        <p className='homeS3-sm-para'>Sustainable water solutions for the world</p>
                    </div>

                    {/* Iamge 4 */}
                    <div className='col-12 col-md-5 home-s3-card'>
                        <div className='home-s3-img-container'>
                            <img className='homeS3img' src={homeS3img4} alt='Image4.png' />
                        </div>
                        <p className='homeS3-sm-para'>Empowering women through Aeronero's Windependence program</p>
                    </div>

                </div>

                {/* Box */}
                <div className='home-s3-box'>
                    <h4 className='home-s3-box-txt'>Our Mission</h4>
                </div>

            </div>

        

        </div>

      </div>
    </>
  )
}

export default HomeCompo3
