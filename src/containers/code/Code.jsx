import React from 'react';
import './code.css';
import { Feature } from '../../components';

function Code() {
  return (
    <div className='rh_documentation section__margin' id='code'>
      <div className='rh_feature_title'>
        <Feature 
          title = "Code"
        />
      </div>
      <div className='rh_documentation_heading'>
        <h1 className='gradient__text'>
        You can easily access our Github repository for an open source code base to better understand the logic behind our back-end.
        </h1>
      </div> 
      <div className='rh_documentation_container'>
        <Feature 
          title = "Link"
          />
        <div className = 'LinkContainer'> 
          <a href = 'https://github.com/Vladi-57/CS410_RH' target="_blank" rel="noopener noreferrer" > Click to open the Github Repository! </a> 
        </div>
      </div>
    </div>
  )
}

export default Code