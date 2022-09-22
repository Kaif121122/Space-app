import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../shared/logo.svg";
import Hamburger from "../shared/icon-hamburger.svg";
import Close from "../shared/icon-close.svg"

function Navbar() {

  const [nav, setNav] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  const [closeNav, setCloseNav] = useState(false)

  function getOpenNav() {
    setNav(true)
    setTimeout(() => {
      setCloseNav(true)
    }, 600)
    setOpenNav(true)
  }


  function getCloseNav() {
    setCloseNav(false)
    setNav(false)
    setTimeout(() => {

      setOpenNav(false)
    }, 600)

  }

  function closeSidebar() {
    setNav(false)
    setCloseNav(false)
    setTimeout(() => {

      setOpenNav(false)
    }, 600)
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className={nav ? "nav-ul show" : "nav-ul"}>
          <li className="navlist"><NavLink onClick={closeSidebar} className="navlink" end to="/Space-app"><span className="nav-span">00</span> HOME</NavLink></li>
          <li className="navlist"><NavLink onClick={closeSidebar} className="navlink" to="/Space-app/Destination"><span className="nav-span">01</span> DESTINATION</NavLink></li>
          <li className="navlist"><NavLink onClick={closeSidebar} className="navlink" to="/Space-app/Crew"><span className="nav-span">02</span> CREW</NavLink></li>
          <li className="navlist"><NavLink onClick={closeSidebar} className="navlink" to="/Space-app/Technology"><span className="nav-span">03</span> TECHNOLOGY</NavLink></li>
        </ul>

      </nav>
      <div className="hamburger"><img className={openNav ? "none" : "show"} onClick={getOpenNav} src={Hamburger} alt="" />
        <img className={closeNav ? "show" : "none"} onClick={getCloseNav} src={Close} alt="" /></div>
    </>

  )
}

export default Navbar;