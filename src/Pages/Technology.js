import React from 'react'
import { useEffect } from 'react'

// NavBar
import NavBar from '../Components/Header/NavBar'
import NavBarLogoColor from '../Images/Logo.png'

// Section 1
import TechCom1 from '../Components/TechnologyCompo/TechCom1'

// Section 2
import TechCom2 from '../Components/TechnologyCompo/TechCom2'

// Section 3
import TechCom3 from '../Components/TechnologyCompo/TechCom3'

// Section 4
import HomeCompo13 from '../Components/HomeCompo/HomeCompo13'

// Section 5
import HomeCompo10 from '../Components/HomeCompo/HomeCompo10'

// Footer
import Footer from '../Components/Footer/Footer'

const Technology = () => {

// Change Title
useEffect( ()=>{
  document.title = "Technology - Aeronero"
})

  return (
    <>
      <NavBar MainLogo = {NavBarLogoColor} manualColor={'#008cd0'} manualBackgroundColor={'#fffffff0'} />
      <TechCom1 />  
      <TechCom2 />
      <TechCom3 />
      <HomeCompo13 />
      <HomeCompo10 />
      <div style={{padding: '30px 0px'}}></div>
      <Footer />  
    </>
  )
}

export default Technology
