import React from 'react'
import { useEffect } from 'react'

// NavBar
import NavBar from '../Components/Header/NavBar'
import NavBarLogoWhite from '../Images/Logo-White.png'

// Section 1
import SubCom1 from '../Components/ProductCompo/SubCom1'
import NeroS1Img1 from '../Images/Nero/4.9-star.png'
import NeroS1Img2 from '../Images/Bubble/Product-Bubble.png'
import NeroS1Img3 from '../Images/Bubble/Bubble-Vertical.png'
import NeroS1Img4 from '../Images/Nero/blue-bg.png'

// Section 2
import SubCom2 from '../Components/ProductCompo/SubCom2'

// Section 3
import SubCom3 from '../Components/ProductCompo/SubCom3'

// Section 4
import SubCom42 from '../Components/ProductCompo/SubCom4-2'

// Section 5
import SubCom5 from '../Components/ProductCompo/SubCom5'

// Section 6
import SubCom6 from '../Components/ProductCompo/SubCom6'

// Section 7
import HomeCompo15 from '../Components/HomeCompo/HomeCompo15'

// Footer
import Footer from '../Components/Footer/Footer'

const Bubble = () => {

  // Change Title
useEffect( ()=>{
  document.title = "Bubble - Aeronero"
})

  return (
    <>
      <NavBar MainLogo = {NavBarLogoWhite} manualColor={'#fffffff0'} manualBackgroundColor={'#008cd0f0'} />
      <SubCom1 
        heading1="Bubble"
        image1 = {NeroS1Img1}
        paragraph1="Pure Water for Every Home"
        paragraph2 = "Affordable, efficient, and reliable, the Bubble Series delivers 15-20 liters of clean drinking water daily, perfect for households and small offices."
        button = "contact sales"
        image2 = {NeroS1Img2}
        image3 = {NeroS1Img3}
        backgroundImage = {NeroS1Img4}
      />
      <SubCom2 />
      <SubCom3 
      data = "Bubble"
      />
      <SubCom42 />
      <SubCom5 
      value1 = "20 Liters / 24hours, (@RH 80%, 30°C)"
      value2 = "Domestic/Industrial"
      value3 = "AC, 1 Phase, 110/220V, 50/60Hz"
      value4 = "450 W"
      value5 = "8 litres"
      value6 = "ABS body & SS water tank"
      value7 = "Sediment, Carbon, UV & Minerals"
      value8 = "30 kg / 66 LB"
      value9 = "LWH 424443598 mm"
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

export default Bubble
