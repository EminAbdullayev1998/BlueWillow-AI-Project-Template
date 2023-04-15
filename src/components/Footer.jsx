import React from 'react'
import logo from '../img/bluewillowlogo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
             <img src={logo} alt="error" width="220px" height="32px" />
        </div>
        
        <div className='bottom'>
            <div className='main-box'>
            <p>© BlueWillow 2023. All Rights Reserved.</p>
            <a href="*">Terms of Service</a>
            <a href="*">Privacy Policy</a>
            <a href="*">Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Footer