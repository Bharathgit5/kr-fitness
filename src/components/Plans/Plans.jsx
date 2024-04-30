import React from 'react'
import './Plans.css'
import plansData from '../../Data/PlansData'
import whiteTick from '../../images/whiteTick.png'
const Plans = () => {
  return (
    <div className='plans-container' id='plans'>
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="plans-header" style={{gap:'2rem'}}>
            <span>READY TO START</span>
            <span>Your journey</span>
            <span>Now with us</span>
         
        </div>
      {/*plans card */}

      <div className="plans">
{plansData.map((plan,i) => 
<div className="plan" key={i}>
    {plan.icon}
    <span>{plan.name}</span>
    <span>₹ {plan.price}</span>
    <div className="features">
        {plan.features.map((feature, i) => 
    <div className="feature">
        <img src={whiteTick} alt="asd" />
        <span key={i}>{feature}</span>
    </div>
)}
    </div>
    <div>
        <span>See more benefits</span>
    </div>
    <button className='btn'>Join now</button>
</div>
)}
      </div>
    </div>
  )
}

export default Plans
