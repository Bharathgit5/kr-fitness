import './App.css'
import Reasons from './components/Reasons/Reasons'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Plans from './components/Plans/Plans'
import Testimonial from './components/Testimonial/Testimonial'
import Address from './components/Address/Address'
import Footer from './components/Footer/Footer'


function App() {
  

  return (
    <>
   <div className='App'>
   <Hero/>
   <Programs/>
   <Reasons/>
   <Plans/>
   <Testimonial/>
  
   <Address/>
   <Footer/>
   </div>

    </>
  )
}

export default App
