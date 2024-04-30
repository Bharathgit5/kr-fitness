import React from 'react'
import './Footer.css'
import instagram from '../../images/instagram.png'
import mylogo from '../../images/kr-logo.png'
import youtube from '../../images/youtube-line.png'
import whatsapp from '../../images/whatsapp-line.png'
const Footer = () => {
  return (
    <div className='footer-container'>
        <hr />
        <div className="footer">
          
            <div className="timings">
            <span>Morning Timings : 5:00AM to 10:00AM</span> <br />
            <span>Evening Timings : 6:00PM to 10:00PM</span>
            </div>
            <div className="social-links">
            <img src={whatsapp} alt="" id='whatsapp'/>

            <img src={youtube} alt="" id='youtube'/>
            <img src={instagram} alt="" id='insta'/>

            </div>

        </div>

      <div className='footer-logo'>
        <img src={mylogo} alt="" className="logo-f"/>
      </div>
      <div className="name">
       Website developed by Bharath.k
      </div>
    </div>
  )
}

export default Footer
