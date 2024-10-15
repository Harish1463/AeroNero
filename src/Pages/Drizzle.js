import React from 'react'
import { useEffect } from 'react'

// NavBar
import NavBar from '../Components/Header/NavBar'
import NavBarLogoWhite from '../Images/Logo-White.png'

// Section 1
import SubCom1 from '../Components/ProductCompo/SubCom1'
import NeroS1Img1 from '../Images/Nero/4.9-star.png'
import NeroS1Img2 from '../Images/Drizzle/Drizzle-product.png'
import NeroS1Img3 from '../Images/Drizzle/Drizzle-1.png'
import NeroS1Img4 from '../Images/Nero/blue-bg.png'

// Section 2
import SubCom2 from '../Components/ProductCompo/SubCom2'

// Section 3
import SubCom3 from '../Components/ProductCompo/SubCom3'

// Section 4
import SubCom43 from '../Components/ProductCompo/SubCom4-3'

// Section 5
import SubCom5 from '../Components/ProductCompo/SubCom5'

// Section 6
import SubCom6 from '../Components/ProductCompo/SubCom6'

// Section 7
import HomeCompo15 from '../Components/HomeCompo/HomeCompo15'

// Footer
import Footer from '../Components/Footer/Footer'

const Drizzle = () => {

  // Change Title
useEffect( ()=>{
  document.title = "Drizzle - Aeronero"
})

  return (
    <>
      <NavBar MainLogo = {NavBarLogoWhite} manualColor={'#fffffff0'} manualBackgroundColor={'#008cd0f0'} />  
      <SubCom1 
        heading1="Drizzle"
        image1 = {NeroS1Img1}
        paragraph1="Revolutionizing Water Generation"
        paragraph2 = "Experience the future of water with Drizzle. Our cutting-edge technology produces 35-40 litres of clean water daily, ideal for commercial spaces like offices, restaurants, and cafes."
        button = "contact sales"
        image2 = {NeroS1Img2}
        image3 = {NeroS1Img3}
        backgroundImage = {NeroS1Img4}
      />
      <SubCom3 
      data = "Drizzle"
      />
      <SubCom2 />
      <SubCom43 />
      <SubCom5 
      value1 = "40 Liters / 24hours, (@RH 80%, 30°C)"
      value2 = "Domestic/Industrial"
      value3 = "AC, 1 Phase, 110/220V, 50/60Hz"
      value4 = "650 W"
      value5 = "15 litres"
      value6 = "SS body & SS/Food grade plastic water tank"
      value7 = "Sediment, Carbon, UV & Minerals"
      value8 = "50 kg/110 lb"
      value9 = "LWH 440460710 mm"
      value10 = "<45dB(A)"
      airwellHeading = ""
      airwellData = ""
      />
      <SubCom6 />
      <HomeCompo15 />
      <Footer />
    </>
  )
}

export default Drizzle
