import React from 'react'

// NavBar
import NavBar from '../Components/Header/NavBar'
import NavBarLogoColor from '../Images/Logo.png'

const Product = () => {
  return (
    <>
      <NavBar MainLogo = {NavBarLogoColor} manualColor={'#008cd0'} manualBackgroundColor={'#fffffff0'} />
      <h1>Product</h1>      
    </>
  )
}

export default Product
