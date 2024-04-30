import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../images/kr-hero-image.png';
import hero_image_back from '../../images/hero_image_back.png';
import heart from '../../images/heart.png';
import calories from '../../images/calories.png'
const Hero = () => {
  return (
    <div className='hero' id='home'>
   
      <div className='left-h'>
<Header/>
{/*the best comp */}
<div className='the-best-gym'>

  <span>join the best fitness club now</span>
</div>
<div className="hero-text">
  <div>
    <span>Shape </span>
    <span>Your</span>
  </div>
  <div>
    <span>Ideal body</span>
  </div>
  <div>
    <span>
    In here we will help you to shape and build your ideal body and live up your life to fullest
    </span>
  
  </div>

</div>
<div className="hero_buttons">
<button className='btn'>Join Now</button>
</div>
{/*stats */}
<div className="figures">
  
  <div>
    <span>+140</span>
    <span>expert coaches</span>
  </div>
  <div>
    <span>+989</span>
    <span>members joined</span>
  </div>
  <div>
    <span>+50</span>
    <span>fitness programs</span>
  </div>
</div>


      </div>
      <div className='right-h'>
      

     
      <div className="blur hero-blur"></div>
        {/*hero images */}
        <img src={hero_image} alt="asd" className='hero_image'/>
        
      </div>
    </div>
  )
}

export default Hero
