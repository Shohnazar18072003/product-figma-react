import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <img src="Logo.svg" alt="" /> 
            <span>Product</span>
          </div>

          <div className="navbar">
            <ul>
              <li><a href="">Product</a></li>
              <li><a href="">Customers</a></li>
              <li><a href="">Pricing</a></li>
              <li><a href="">Resources</a></li>
              <button className='btn-1'>Sign In</button>
              <button className='btn-2'>Sign Up</button>
              <a href=""><img src="Dark-light.svg" alt="" /></a>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header