import React from 'react'
import { useEffect } from 'react'

// NavBar
import NavBar from '../Components/Header/NavBar'
import NavBarLogoWhite from '../Images/Logo-White.png'

// Section 1
import SubCom1 from '../Components/ProductCompo/SubCom1'
import NeroS1Img1 from '../Images/Nero/4.9-star.png'
import NeroS1Img2 from '../Images/Thunder/Product-Thunder.png'
import NeroS1Img3 from '../Images/Thunder/Thunder-1.png'
import NeroS1Img4 from '../Images/Nero/blue-bg.png'

// Section 2
import SubCom2 from '../Components/ProductCompo/SubCom2'

// Section 3
import SubCom3 from '../Components/ProductCompo/SubCom3'

// Section 4
import SubCom44 from '../Components/ProductCompo/SubCom4-4'

// Section 5
import SubCom5 from '../Components/ProductCompo/SubCom5'

// Section 6
import SubCom6 from '../Components/ProductCompo/SubCom6'

// Section 7
import HomeCompo15 from '../Components/HomeCompo/HomeCompo15'

// Footer
import Footer from '../Components/Footer/Footer'

const Thunder = () => {

  // Change Title
useEffect( ()=>{
  document.title = "Thunder - Aeronero"
})

  return (
    <>
      <NavBar MainLogo = {NavBarLogoWhite} manualColor={'#fffffff0'} manualBackgroundColor={'#008cd0f0'} /> 
      <SubCom1 
        heading1="Thunder"
        image1 = {NeroS1Img1}
        paragraph1="Powering Communities with Pure Water"
        paragraph2 = "Delivering up to 150 litres of clean water daily, Thunder is the ideal solution for communities, NGOs, offices, factories, and institutions seeking water independence."
        button = "contact sales"
        image2 = {NeroS1Img2}
        image3 = {NeroS1Img3}
        backgroundImage = {NeroS1Img4}
      />
      <SubCom2 />
      <SubCom3 
      data = "Thunder"
      />
      <SubCom44 />
      <SubCom5 
      value1 = "150 Liters / 24hours, (@RH 80%, 30°C)"
      value2 = "Industrial"
      value3 = "AC, 1 Phase, 110/220V, 50/60Hz"
      value4 = "2400 W"
      value5 = "100 litres"
      value6 = "SS body & SS/Food grade plastic water tank"
      value7 = "Sediment, Carbon, UV & Minerals"
      value8 = "110 kg / 243 lb"
      value9 = "LWH 700711915 mm"
      value10 = "<72dB(A)"
      airwellHeading = ""
      airwellData = ""
      />
      <SubCom6 />
      <HomeCompo15 />
      <Footer />
    </>
  )
}

export default Thunder
