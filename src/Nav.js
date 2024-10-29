import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../src/img.png'; 

const Nav = () => {
  return (
  <header>
      <div className="header">
          <Link to="/lo">Parent Login</Link>
          <Link to="/e">Employee Login</Link>
      </div>
      <nav>
      <div className="navdiv">
      <img src={logo} alt="Logo" />
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT US</Link>
        <Link to='/academics'>ACADEMICS</Link>
        <Link to='/contact'>CONTACT</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav
