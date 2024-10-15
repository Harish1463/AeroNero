import React from 'react'
import { useEffect } from 'react'

// NavBar
import NavBar from '../Components/Header/NavBar'
import NavBarLogoColor from '../Images/Logo.png'

// Section 1
import ContCom1 from '../Components/ContactCompo/ContCom1'

// Section 2
import ContCom2 from '../Components/ContactCompo/ContCom2'

// Section 3
import ContCom3 from '../Components/ContactCompo/ContCom3'

const Contact = () => {

  // Change Title
useEffect( ()=>{
  document.title = "Contact - Aeronero"
})

  return (
    <>
      <NavBar MainLogo = {NavBarLogoColor} manualColor={'#008cd0'} manualBackgroundColor={'#fffffff0'} />
      <ContCom1 />
      <ContCom2 />
      <ContCom3 />
    </>
  )
}

export default Contact
