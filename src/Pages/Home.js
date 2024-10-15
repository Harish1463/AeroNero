import React from 'react'

// AOS
import Aos from 'aos'

// CSS
import './CSS/Home.css'

// NavBar
import NavBar from '../Components/Header/NavBar'
import NavBarLogoColor from '../Images/Logo.png'

// Section 1
import HomeS1Vid from '../Video/Hero-Video.mp4'

// Section 2
import HomeS2Left from '../Images/Home/Bubble-Left.png'
import HomeS2Right from '../Images/Home/Bubble-right.png'

// Section 3
import HomeCompo3 from '../Components/HomeCompo/HomeCompo3'

// Section 4
import HomeS4Left from '../Images/Home/Bubble-left2.png'
import HomeS4Right from '../Images/Home/Bubble-right2.png'

// Section 5
import HomeCompo5 from '../Components/HomeCompo/HomeCompo5'
// import HomeSwipper from '../Components/HomeCompo/HomeSwipper'

// Section 6
import HomeCompo6 from '../Components/HomeCompo/HomeCompo6'

// Section 7
import HomeCompo7 from '../Components/HomeCompo/HomeCompo7'

// Section 8
import HomeCompo8 from '../Components/HomeCompo/HomeCompo8'

// Section 9
import HomeCompo9 from '../Components/HomeCompo/HomeCompo9'

// Section 10
import HomeCompo10 from '../Components/HomeCompo/HomeCompo10'

// Section 12
import HomeCompo12 from '../Components/HomeCompo/HomeCompo12'

// Section 13
import HomeCompo13 from '../Components/HomeCompo/HomeCompo13'

// Section 14
import HomeCompo14 from '../Components/HomeCompo/HomeCompo14'

// Section 15
import HomeCompo15 from '../Components/HomeCompo/HomeCompo15'

// Footer
import Footer from '../Components/Footer/Footer'



const Home = () => {

  // AOS
  Aos.init();

  return (
    <>
      <NavBar MainLogo = {NavBarLogoColor} manualColor={'#008cd0'} manualBackgroundColor={'#fffffff0'} />
      {/* ------------------------------------------------------Section 1------------------------------------------------------------------ */}
      <div className='home-s1-container'>
        
        <div className='home-s1-container-inside'>

          {/* Background Video */}
          <video className='home-s1-vid' autoPlay muted loop>
            <source src={HomeS1Vid}  type='video/mp4'/>
          </video>

          {/* Text Container */}
          <div className='home-s1-txt-container'>
            <div className='home-s1-txt-container-inside'>
              <h1 
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-once="true"
              className='home-s1-heading1'>Water <span className='home-s1-heading2'>from air</span></h1>
              <p className='home-s1-para'>From sustaining the smallest households to powering the largest industries, we want to create a water-secure planet</p>
            </div>
          </div>

        </div>
        
      </div>

      {/* --------------------------------------------------------Section 2------------------------------------------------------------- */}
     <div className='container-fluid home-s2-container'>

      <div className='row'>

        {/* Bubble Left Image */}
        <div className='col-md-12 col-lg-1 home-s2-left-container'>
          <img className='home-s2-img' src={HomeS2Left} alt='Bubble-Left.png' />
        </div>

        {/* Paragraph */}
        <div 
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-once="true"
        className='col-md-12 col-lg-10 home-s2-para-container'>
          <p className='home-s2-para'><span className='home-s2-highlight'>'Aeronero'</span> is a global company that leverages state-of-the-art technology to provide reliable, sustainable, and eco-friendly water solutions. Our<span className='home-s2-highlight'> air water generators (AWG)</span> extract moisture from the air and converts it into pure drinking water, ensuring a constant and safe water supply.</p>
        </div>
        
        {/* Bubble Right Image */}
        <div className='col-md-12 col-lg-1 home-s2-right-container'>
          <img className='home-s2-img' src={HomeS2Right} alt='Bubble-right.png' />
        </div>
      </div>
      
      
     </div>

     {/* --------------------------------------------------------Section 3-------------------------------------------------------------- */}
      <HomeCompo3 />

      {/* --------------------------------------------------------Section 4------------------------------------------------------------- */}
     <div className='container-fluid home-s2-container'>

      <div className='row'>

        {/* Bubble Left Image */}
        <div className='col-md-12 col-lg-1 order-3 order-lg-1 home-s2-left-container'>
          <img className='home-s2-img' src={HomeS4Left} alt='Bubble-Left.png' />
        </div>

        {/* Paragraph */}
        <div 
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-once="true"
        className='col-md-12 col-lg-10 order-2 home-s2-para-container'>
          <p className='home-s2-para'><b>Air,</b> often overlooked as a source of water, is actually <span className='home-s2-highlight'>the second-largest reservoir on our planet</span> - and <span className='home-s2-highlight'>our solution to end water scarcity.</span></p>
        </div>
        
        {/* Bubble Right Image */}
        <div className='col-md-12 col-lg-1 order-1 order-lg-3 home-s2-right-container'>
          <img className='home-s2-img' src={HomeS4Right} alt='Bubble-right.png' />
        </div>
      </div>


    </div>

    {/* -----------------------------------------------------------Section 5---------------------------------------------------------- */}
    <HomeCompo5 />
    {/* <HomeSwipper /> */}

    {/* ---------------------------------------------------------Section 6------------------------------------------------------------- */}
    <HomeCompo6 />

    {/* ---------------------------------------------------------Section 7----------------------------------------------------------- */}
    <HomeCompo7 />

    {/* --------------------------------------------------------Section 8----------------------------------------------------------- */}
    <HomeCompo8 />

    {/* ---------------------------------------------------------Section 9----------------------------------------------------------- */}
    <HomeCompo9 />

    {/* --------------------------------------------------------Section 10------------------------------------------------------------ */}
    <HomeCompo10 />

    {/* ---------------------------------------------------------Section 11------------------------------------------------------------ */}
    <div className='container-fluid home-s2-container'>

      <div className='row'>

        {/* Bubble Left Image */}
        <div className='col-md-12 col-lg-1 home-s2-left-container'>
          <img className='home-s2-img' src={HomeS2Left} alt='Bubble-Left.png' />
        </div>

        {/* Paragraph */}
        <div 
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-once="true"
        className='col-md-12 col-lg-10 home-s2-para-container'>
          <p className='home-s2-para'><span className='home-s2-highlight'>Aeronero's cutting-edge technology</span> is backed by continuous innovation and healthy, sustainable partnerships.</p>
        </div>
        
        {/* Bubble Right Image */}
        <div className='col-md-12 col-lg-1 home-s2-right-container'>
          <img className='home-s2-img' src={HomeS2Right} alt='Bubble-right.png' />
        </div>
      </div>
      
      
    </div>

    {/* ---------------------------------------------------------Section 12----------------------------------------------------------- */}
    <HomeCompo12 />

    {/* ---------------------------------------------------------Section 13---------------------------------------------------------- */}
    <HomeCompo13 />

    {/* ---------------------------------------------------------Section 14----------------------------------------------------------- */}
    <HomeCompo14 />

    {/* ---------------------------------------------------------Section 15---------------------------------------------------------- */}
    <HomeCompo15 />

    <Footer />
    </>
  )
}

export default Home