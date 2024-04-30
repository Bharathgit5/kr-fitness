import React from 'react'
import './Programs.css';
import { ProgramsData } from '../../Data/ProgramsData';
import rightarrow from '../../images/rightArrow.png'
const Programs = () => {

  return (
    <div className='Programs' id='programs'>
        {/*header */}
        <div className="program-header">
            <span>Explore our</span>
            <span>Programs</span>
            <span>to shape you</span>
        </div>
        <div className="program-categery">
         {ProgramsData.map(program =>
         <div className="category">
          {program.image}
          <span>{program.heading}</span>
          <span>{program.details}</span>
          <div className="join-now">
            <span>Join Now</span>
            <img src={rightarrow} alt="img" />
          </div>
         </div>
         )}
        </div>

  </div>
  )
}

export default Programs
