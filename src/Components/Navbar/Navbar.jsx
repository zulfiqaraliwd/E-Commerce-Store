import React from 'react'
import products from '../../Data/products';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import Home from '../../Pages/Home';
function Navbar() {
  return (
    <div>
    <div className='navbar'>
        <div>
            <img className ="main-logo" src="/assets/images/dryF-logo.png" width={90} alt="logo" />
        </div>
     <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/orders">Orders</Link></li>
</ul>

    </div>
    </div>
  )
}

export default Navbar
