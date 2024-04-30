import React, { useState } from 'react'
import './Header.css'
import mylogo from '../../images/kr-logo.png'
import Bars from '../../images/bars.png'
import {Link} from 'react-scroll'
const Header = () => {
  const mobile = window.innerWidth<=768 ? true:false;
  const [menuOpend, setMenuOpened] = useState(false)
  return (
    <div className='header'>
      
      <img src={mylogo} alt="asdf"  className='logo'/>
      {(menuOpend === false && mobile === true)? (

        <div style={{backgroundColor: 'var(--appColor)', padding:'0.5rem', borderRadius:'5px'}}
        onClick={()=>setMenuOpened(true)}><img src={Bars} alt='assd'  style={{width:'1.5rem', height:'1.5rem'}}/></div>
      ) :  <ul className='header-menu'>
      <li ><Link onClick={() => setMenuOpened(false)}
      to='home'
      span={true}
      smooth={true}>Home</Link></li>
   <li ><Link onClick={() => setMenuOpened(false)}
      to='Programs'
      span={true}
      smooth={true}>Programs</Link></li>
  <li ><Link onClick={() => setMenuOpened(false)}
      to='reasons'
      span={true}
      smooth={true}>Why us</Link></li>
        <li ><Link onClick={() => setMenuOpened(false)}
      to='plans'
      span={true}
      smooth={true}>Plans</Link></li>
        <li ><Link onClick={() => setMenuOpened(false)}
      to='testimonials'
      span={true}
      smooth={true}>Transformations</Link></li>
       <li ><Link onClick={() => setMenuOpened(false)}
      to='Address'
      span={true}
      smooth={true}>Address</Link></li>
     

    </ul>}
   
    </div>
  )
}

export default Header
