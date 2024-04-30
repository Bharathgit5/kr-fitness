import React from 'react'
import './Testimonial.css'
import gym1 from '../../images/gymtest1.jpeg'
import gym2 from '../../images/gymtest2.jpeg'
import gym3 from '../../images/gymtest3.jpeg'

const Testimonial = () => {
  return (
    <div className='testimonial-container' id='testimonials'>
        <div className="testimonials-header">
            <span>Transformations</span>
            
        </div>
      <div className="main-container">
      
        <img src={gym1} alt="asd" />
        <img src={gym2} alt="asd" />
        <img src={gym3} alt="asd" />
      
      </div>
    </div> 
  )
}

export default Testimonial
