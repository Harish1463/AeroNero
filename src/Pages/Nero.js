import React from 'react'
import { useEffect } from 'react'

// NavBar
import NavBar from '../Components/Header/NavBar'
import NavBarLogoWhite from '../Images/Logo-White.png'

// Section 1
import SubCom1 from '../Components/ProductCompo/SubCom1'
import NeroS1Img1 from '../Images/Nero/4.9-star.png'
import NeroS1Img2 from '../Images/Nero/Product-Nero.png'
import NeroS1Img3 from '../Images/Nero/NERONERO-Vertical.png'
import NeroS1Img4 from '../Images/Nero/blue-bg.png'

// Section 2
import SubCom2 from '../Components/ProductCompo/SubCom2'

// Section 3
import SubCom3 from '../Components/ProductCompo/SubCom3'

// Section 4
import SubCom41 from '../Components/ProductCompo/SubCom4-1'

// Section 5
import SubCom5 from '../Components/ProductCompo/SubCom5'

// Section 6
import SubCom6 from '../Components/ProductCompo/SubCom6'

// Section 7
import HomeCompo15 from '../Components/HomeCompo/HomeCompo15'

// Footer
import Footer from '../Components/Footer/Footer'

const Nero = () => {

  // Change Title
useEffect( ()=>{
  document.title = "Nero - Aeronero"
})

  return (
    <>
      <NavBar MainLogo = {NavBarLogoWhite} manualColor={'#fffffff0'} manualBackgroundColor={'#008cd0f0'} />
      <SubCom1 
        heading1="Nero"
        image1 = {NeroS1Img1}
        paragraph1="Your pure water solution"
        paragraph2 = "Compact, energy-efficient, and affordable, Nero AWG delivers up to 10 litres of pure drinking water daily, making it perfect for individuals and young couples."
        button = "contact sales"
        image2 = {NeroS1Img2}
        image3 = {NeroS1Img3}
        backgroundImage = {NeroS1Img4}
        />
      <SubCom2 />
      <SubCom3 
      data = "Nero"
      />
      <SubCom41 />
      <SubCom5 
      value1 = "10 Litres / 24 hours (@RH 80%, 30℃)"
      value2 = "Domestic"
      value3 = "AC, 1 Phase, 110/220V, 50/60Hz"
      value4 = "220 W"
      value5 = "7 litres"
      value6 = "ABS body & SS water tank"
      value7 = "Sediment, Carbon & Minerals"
      value8 = "13.5 kg / 30 lb"
      value9 = "LWH 260300660 mm"
      value10 = "<36dB(A)"
      airwellHeading = ""
      airwellData = ""
      />
      <SubCom6 />
      <HomeCompo15 />
      <Footer />
    </>
  )
}

export default Nero
