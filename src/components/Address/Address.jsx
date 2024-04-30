import React from 'react'
import './Address.css'
import moinabad from '../../images/kr-fitness-moinabad.jpg'
const Address = () => {
  return (

   <>
  <div className="program-header" id = "Address" style={{gap:'2rem'}}>
           <span>Our Branches</span>
           </div>
        
    <div className='address-container'>
        
        <div className='card'>
            <span>Moinabad</span>
<img src={moinabad} alt="asd" />
<p>Kr-Fitness club Moinabad, Above Ratnadeep, R.R District, Telangana 500075.</p>
<button className='btn'>View Location</button>
</div>
<div className='card'>
    <span>chevella</span>
<img src={moinabad} alt="asd" />
<p>Kr-Fitness club Chevella, Above Spoorty Restaurant, R.R District, Telangana 501503.</p>
<button className='btn'>View Location </button>
</div>
    </div>
    </>
  
  )
}

export default Address
