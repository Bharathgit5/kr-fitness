import React from 'react'
import './Reasons.css'
import img1 from '../../images/image1.png';
import img2 from '../../images/image2.png';
import img3 from '../../images/image3.png';
import img4 from '../../images/image4.png';
import tick from '../../images/tick.png'
const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
        <div className="left-r">
    <img src={img1} alt="asd" />
    <img src={img2} alt="img" />
    <img src={img3} alt="asd" />
    <img src={img4} alt="asd" />
    
        </div>

        <div className="right-r">
<span>some reasons</span>
<div>
  <span>Why</span>
  <span> Choose us</span>
</div>
<div className='details-r'>
  <div>
    <img src={tick} alt="asd" />
    <span>Over 140 expert coachs</span>
  </div>

  <div>
    <img src={tick} alt="asd" />
    <span>train smarter and faster than before</span>
  </div>

  <div>
    <img src={tick} alt="asd" />
    <span>1 free program for new member</span>
  </div>

  <div>
    <img src={tick} alt="asd" />
    <span> reliable partners</span>
  </div>
</div>

        </div>
      
    </div>
  )
}

export default Reasons
