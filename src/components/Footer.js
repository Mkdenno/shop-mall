import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='container'>
      <div className="Newsletter">
      <h2>NewsLetter</h2>
      <div className="inputform">
      <input type='text' placeholder='NewsLetter' /><button>Subscribe</button>
      </div>
      </div>
        <div className='footerthings'>

        <div>
          <h5>Quick Links</h5>
          <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Orders</li>
          <li>About</li>
          <li>Contact Us</li>
          </ul>
        </div>
        <div>
        <h5>Extra Links</h5>
        <ul>
          <li>Fevorites</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          </ul>
        </div>
        <div>
        <h5>Our Outfits</h5>
        <ul>
          <li>Men's Wear</li>
          <li>Ladies</li>
          <li>Sports</li>
          <li>Crocs</li>
          <li>Sandles</li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer