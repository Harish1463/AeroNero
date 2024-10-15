import React from 'react'
import { useEffect } from 'react'

// NavBar
import NavBar from '../Components/Header/NavBar'
import NavBarLogoWhite from '../Images/Logo-White.png'

// Section 1
import SubCom1 from '../Components/ProductCompo/SubCom1'
import NeroS1Img1 from '../Images/Nero/4.9-star.png'
import NeroS1Img2 from '../Images/Airwell/Airwell-Product-Image.png'
import NeroS1Img3 from '../Images/Airwell/Airwell-1.png'
import NeroS1Img4 from '../Images/Nero/blue-bg.png'

// Section 2
import SubCom2 from '../Components/ProductCompo/SubCom2'

// Section 3
import SubCom3 from '../Components/ProductCompo/SubCom3'

// Section 4
import SubCom45 from '../Components/ProductCompo/SubCom4-5'

// Section 5
import SubCom5 from '../Components/ProductCompo/SubCom5'

// Section 6
import SubCom6 from '../Components/ProductCompo/SubCom6'

// Section 7
import HomeCompo15 from '../Components/HomeCompo/HomeCompo15'

// Footer
import Footer from '../Components/Footer/Footer'

const Airwell = () => {

  // Change Title
useEffect( ()=>{
  document.title = "Airwell - Aeronero"
})

  return (
    <>
      <NavBar MainLogo = {NavBarLogoWhite} manualColor={'#fffffff0'} manualBackgroundColor={'#008cd0f0'} />  
      <SubCom1 
        heading1="Airwell"
        image1 = {NeroS1Img1}
        paragraph1="Scalable Water Solutions for Every Need"
        paragraph2 = "Modular, reliable, and sustainable, Airwell delivers 500-5000 litres of water daily, perfect for offices, NGOs, industries, and hospitality."
        button = "contact sales"
        image2 = {NeroS1Img2}
        image3 = {NeroS1Img3}
        backgroundImage = {NeroS1Img4}
      />
      <SubCom2 />
      <SubCom3 
      data = "Airwell"
      />
      <SubCom45 />
      <SubCom5 
      value1 = "5000 Liters / 24hours, (@RH 80%, 30°C)  "
      value2 = "Industrial"
      value3 = "AC, 1 Phase, 110/220V, 50/60Hz"
      value4 = "8000 W"
      value5 = "15 litres"
      value6 = "SS body & SS/Food grade plastic water tank"
      value7 = "Sediment, Carbon, UV & Minerals"
      value8 = "500 kg / 1102 lb"
      value9 = "LWH 700711482 mm"
      value10 = "<140dB(A)"
      airwellHeading = "Total no. of Generators:"
      airwellData = "3"
      />
      <SubCom6 />
      <HomeCompo15 />
      <Footer />
    </>
  )
}

export default Airwell
