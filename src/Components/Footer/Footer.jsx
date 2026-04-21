import React from 'react'
import { FaWhatsapp,FaFacebook,FaInstagram } from 'react-icons/fa'
import "./footer.css"



function Footer() {
  return (
    <div className='footer'>
        
      <div className='footer-container'>
        <div style={{ paddingTop: "30px" }}><img className='logo' src="/assets/images/dryF-logo.png" alt="" /></div>
        <div className='footer-section'>
<h1>UnitedMarkhor Dry Fruit</h1>
<p>Quality Products Accross Pakistan</p>
        </div>

      <div className='product-section' style={{ paddingTop: "10px" }}>
<h3>Links</h3>
<p>Home</p>
<p>About</p>
<p>Products</p>
        </div>


<div className='footer-section'>
    <h3>Contact</h3>
    <p>03465147766</p>
    <p>unitedmarkhorgroup786@gmail.com</p>
</div>

<div className='footer-section'>
    <h3>Visit and Follow Us</h3>
    <div className='icons'>
        <FaFacebook />
        <FaInstagram />
        <FaWhatsapp />
    </div>
</div>
 </div>
      <div className='footer-bottom'></div>
      <p className='content'>@2026 UnitedMarkhorGroup786 </p>
    </div>
  )
}

export default Footer
