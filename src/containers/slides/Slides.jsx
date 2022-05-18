import React from 'react';
import './slides.css';
import { Feature } from '../../components';

function Slide() {
  return (
    <div className='rh_documentation section__margin' id='slides'>
      <div className='rh_feature_title'>
        <Feature 
          title = "Slide"
        />
      </div>
      <div className='rh_documentation_heading'>
        <h1 className='gradient__text'>
        With just few slides prepared by the team, everything about our project become easy to follow. Weeks of research are put across in a simple format. Click on the link to get directed to the slides.
        </h1>
      </div> 
      <div className='rh_documentation_container'>
        <Feature 
          title = "Link"
          />
        <div className = 'LinkContainer'> 
          <a href = 'https://liveumb-my.sharepoint.com/:p:/g/personal/f_elalaoui001_umb_edu/EQzkWwT5KdNAjkHEPUSSQ-oBWR9fQmBLNwr5wz0wqMgN9Q?e=ZQT3n2' target="_blank" rel="noopener noreferrer" > Click to open the slides! </a> 
        </div>
      </div>
    </div>
  )
}

export default Slide