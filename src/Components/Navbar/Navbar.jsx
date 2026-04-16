import React from 'react'
import logo from "../../assets/images/dryF-logo.png";
import "./Navbar.css"
function Navbar() {
  return (
    <div>
    <div className='navbar'>
        <div>
            <img src={logo} width={90} alt="logo" />
        </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Orders</li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
