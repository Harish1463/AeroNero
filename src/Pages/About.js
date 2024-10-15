import React from 'react'
import { useEffect } from 'react'

// NavBar
import NavBar from '../Components/Header/NavBar'
import NavBarLogoColor from '../Images/Logo.png'

// Section 1
import AbtCom1 from '../Components/AboutCompo/AbtCom1'

// Section 2
import HomeCompo10 from '../Components/HomeCompo/HomeCompo10'

// Section 3
import AbtCom3 from '../Components/AboutCompo/AbtCom3'

// Section 4
import AbtCom4 from '../Components/AboutCompo/AbtCom4'

// Section 5
import AbtCom5 from '../Components/AboutCompo/AbtCom5'

// Section 6
import HomeCompo6 from '../Components/HomeCompo/HomeCompo6'

// Section 7
import AbtCom7 from '../Components/AboutCompo/AbtCom7'

// Section 8
import AbtCom8 from '../Components/AboutCompo/AbtCom8'

// Section 9
import AbtCom9 from '../Components/AboutCompo/AbtCom9'

// Section 10
import AbtCom10 from '../Components/AboutCompo/AbtCom10'

// Footer 
import Footer from '../Components/Footer/Footer'


const About = () => {

  // Change Title
useEffect( ()=>{
  document.title = "About - Aeronero"
})

  return (
    <>
      <NavBar MainLogo = {NavBarLogoColor} manualColor={'#008cd0'} manualBackgroundColor={'#fffffff0'} />

      {/* ------------------------------------------------Section 1--------------------------------------------- */}
      <AbtCom1 />

      {/* ------------------------------------------------Section 2--------------------------------------------- */}
      <HomeCompo10 />

      {/* ------------------------------------------------Section 3--------------------------------------------- */}
      <AbtCom3 />

      {/* ------------------------------------------------Section 4--------------------------------------------- */}
      <AbtCom4 />

      {/* ------------------------------------------------Section 5--------------------------------------------- */}
      <AbtCom5 />

      {/* ------------------------------------------------Section 6---------------------------------------------- */}
      <HomeCompo6 />

      {/* ------------------------------------------------Section 7--------------------------------------------- */}
      <AbtCom7 />

      {/* ------------------------------------------------Section 8--------------------------------------------- */}
      <AbtCom8 />

      {/* -----------------------------------------------Section 9----------------------------------------------- */}
      <AbtCom9 />

      {/* -------------------------------------------------Section 10---------------------------------------------- */}
      <AbtCom10 />

      <Footer />
       
    </>
  )
}

export default About
