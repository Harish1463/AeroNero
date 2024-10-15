import React from 'react'

// CSS
import './TechCSS/TechCom1.css'

// Video
import TechS1VidWeb from '../../Video/AN-Technology-Hero-Shrinked.mp4'
import TechS1VidMobile from '../../Video/Technology-Hero-Portrait.mp4'

const TechCom1 = () => {
  return (
    <>
        <div className='tech-s1-container'>

            {/* Web And Tab View Video */}
            <video className='d-none d-md-block d-lg-block tech-s1-vid-web' src={TechS1VidWeb} autoPlay muted loop type='video/mp4'></video>
            
            {/* Mobile View Video */}
            <video className='d-block d-md-none tech-s1-vid-web' src={TechS1VidMobile} autoPlay muted loop type='video/mp4'></video>
        </div>
    </>
  )
}

export default TechCom1
