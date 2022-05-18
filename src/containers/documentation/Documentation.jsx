import React from 'react';
import './documentation.css';
import { Feature } from '../../components';

function Possibility() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='documentation'>
      <div className='rh_feature_title'>
        <Feature 
          title = "Documentation"
        />
      </div>
      <div className='rh_documentation_heading'>
        <h1 className='gradient__text'>
        Our Documentation can help you understand the project better. The documentation will give you access to all relevant information without the chances of being lost.
        </h1>
      </div> 
      <div className='rh_documentation_container'>
        <Feature 
          title = "Link"
          />
         <div> 
          <a className = 'LinkContainer' href = 'https://github.com/Vladi-57/CS410_RH/blob/main/README.md' target="_blank" rel="noopener noreferrer" > Click to open the documentation! </a> 
        </div>
      </div>
    </div>
  )
}


export default Possibility