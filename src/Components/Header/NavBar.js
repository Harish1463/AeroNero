import React from 'react'
import { NavLink } from 'react-router-dom'
// CSS
import './NavBar.css'



const NavBar = ({MainLogo, manualColor, manualBackgroundColor}) => {
  return (
    <>
      <div style={{backgroundColor: manualBackgroundColor}} className='sticky-top nav-transperant'>
        <nav className="navbar navbar-light py-3">
          <div className="container-fluid navbar-container">
              {/* <!-- Offcanvas trigger (hamburger icon) --> */}
              <button className="btn p-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                  <i style={{color: manualColor}} className="fa-solid fa-bars navbar-menu-icon"></i>
              </button>

              {/* <!-- Logo in the center --> */}
              <div className="mx-auto">
                  <NavLink to='/'><img src={MainLogo} alt="Logo" className="navbar-logo" /></NavLink>
              </div>

              {/* <!-- Contact icon on the right --> */}
              <a href="tel:1234567890" style={{backgroundColor: manualColor}} className="navbar-icon-container">
                <i style={{color: manualBackgroundColor}} className="fa-solid fa-phone navbar-icon"></i>
              </a>
          </div>
        </nav>

        {/* <!-- Offcanvas Navigation --> */}
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" data-bs-backdrop="false">
          <div className="offcanvas-header navbar-close-btn-container">
              <i style={{color: manualColor}} type="button" className="fa-solid fa-xmark navbar-close-btn" data-bs-dismiss="offcanvas"></i>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className='navbar-link-txt-container'><NavLink className='navbar-link-txt' to='/'>Home</NavLink></li>
              <li className='navbar-link-txt-container'><NavLink className='navbar-link-txt' to='/About'>About</NavLink></li>
              <li className="nav-item dropdown navbar-link-txt-container">
                <NavLink to='/Product' className="navbar-link-txt" id="productDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Product&nbsp;&nbsp;<i className="fa-solid fa-caret-down"></i></NavLink>
                <ul className="dropdown-menu" aria-labelledby="productDropdown">
                  <li><NavLink className="dropdown-item navbar-dd-txt" to='/Nero'>Nero</NavLink></li>
                  <li><NavLink className="dropdown-item navbar-dd-txt" to='/Bubble'>Bubble</NavLink></li>
                  <li><NavLink className="dropdown-item navbar-dd-txt" to='/Drizzle'>Drizzle</NavLink></li>
                  <li><NavLink className="dropdown-item navbar-dd-txt" to='/Thunder'>Thunder</NavLink></li>
                  <li><NavLink className="dropdown-item navbar-dd-txt" to='/Airwell'>Airwell</NavLink></li>
                </ul>
              </li>
              <li className='navbar-link-txt-container'><NavLink className='navbar-link-txt' to='/Technology'>Technology</NavLink></li>
              <li className='navbar-link-txt-container'><NavLink className='navbar-link-txt' to='/Contact'>Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default NavBar
