import React from 'react'

import './style.css'
import Education from './Education/Education'
import Skills from './Skills/Skills';

class PersonalDetail extends React.Component {
  render () {
    return (
      <div className='personal-detail m-0 p-0'>
        <ul className='m-0 p-0'>
          <li className='detail-item'>
            <Education />
          </li>
          <li className='detail-item'>
            <Skills />
          </li>
          <li className='detail-item'>My hobbies</li>
        </ul>
      </div>
    )
  }
}

export default PersonalDetail
