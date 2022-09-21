import React, { useState } from "react";
import { NavLink } from "react-router-dom"

function Navbar() {

  const [nav, setNav] = useState(false)
  const [closeNav, setCloseNav] = useState(false)

  function getNav() {
    setNav(true)
    setCloseNav(true)
  }

  function getCloseNav() {
    setCloseNav(false)
    setNav(false)
  }

  function closeSidebar() {
    setNav(false)
    setCloseNav(false)
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="./assets/shared/logo.svg" alt="" />
        </div>
        <ul className={nav ? "nav-ul show" : "nav-ul"}>
          <li className="navlist"><NavLink onClick={closeSidebar} className="navlink" end to="/"><span className="nav-span">00</span> HOME</NavLink></li>
          <li className="navlist"><NavLink onClick={closeSidebar} className="navlink" to="/Destination"><span className="nav-span">01</span> DESTINATION</NavLink></li>
          <li className="navlist"><NavLink onClick={closeSidebar} className="navlink" to="/Crew"><span className="nav-span">02</span> CREW</NavLink></li>
          <li className="navlist"><NavLink onClick={closeSidebar} className="navlink" to="/Technology"><span className="nav-span">03</span> TECHNOLOGY</NavLink></li>
        </ul>

      </nav>
      <div className="hamburger"><img className={nav ? "none" : "show"} onClick={getNav} src="./assets/shared/icon-hamburger.svg" alt="" />
        <img className={closeNav ? "show" : "none"} onClick={getCloseNav} src="./assets/shared/icon-close.svg" alt="" /></div>
    </>

  )
}

export default Navbar;