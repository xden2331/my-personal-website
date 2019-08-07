import React from 'react'

import './style.css'

const Education = () => {
  return (
    <div className='education container pb-5'>
      <div className='row text-center d-flex align-items-center justify-content-center h2 pb-4'>
        <hr
          className='d-none d-md-inline-block'
          style={{ backgroundColor: 'black' }}
        />
        My Education
        <hr
          className='d-none d-md-inline-block'
          style={{ backgroundColor: 'black' }}
        />
      </div>

      <div className='row d-flex py-3 justify-content-center'>
        <div className='d-none d-sm-inline-block col-12 col-md-6 mb-4 p-0'>
          <div className='image image-1' />
        </div>
        <div className='col-12 col-md-6'>
          <div className='ui'>
            <div className='content ml-2'>
              <div className='header'>
                <p className='h3'>
                  <a target='_blank' rel='noopener noreferrer' href='https://sydney.edu.au/'>
                    The University of Sydney
                  </a>
                </p>
              </div>

              <div
                className='meta mb-3 font-weight-bold'
                style={{ color: '#5e9516' }}
              >
                <p>
                  Bachelor of Computer Science and Technology
                  <br />
                  2016.7 - 2019.7
                </p>
              </div>

              <p className='description'>
                The University of Syndey provided me with unprecedented
                experience of education. The 3-year degree pushed me to discover
                the world of Computer Science.
                <br />
                <br />
                The data structure unit taught me what the most popular models
                are, and gave me the key to explore the vast universe of
                programming; the algorithm unit taught me the paths to solve
                problems; the database management units taught me the art of
                storing and manipulating data. My engagement in the volunteering
                program of faculty of Engineer exercised my cooperative
                capability; the software development project collaborated with
                Crop Oracle sparked my obsession with Software Development, and
                enhanced my tolerance to adversity.
                <br />
                <br />
                The University of Sydney showed me what I love to do, gave me
                the key, and surrounded me with an atmosphere of continuely
                improving oneself.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='row d-flex py-3 justify-content-center'>
        {/* Master */}
        <div className='d-none d-sm-inline-block col-12 col-md-6 p-0'>
          <div className='image image-2' />
        </div>
        <div className='col-12 col-md-6'>
          <div className='ui'>
            <div className='content'>
              <div className='header'>
                <p className='h3'>
                  <a target='_blank' rel='noopener noreferrer' href='https://sydney.edu.au/'>
                    The University of Sydney
                  </a>
                </p>
              </div>
              <div
                className='meta mb-3 font-weight-bold'
                style={{ color: '#5e9516' }}
              >
                <p>
                  Master of IT in Software Engineering
                  <br />
                  Currently Enrolled, <em><strong>earned Dec 2020</strong></em>
                </p>
              </div>
              <p className='description'>
                After completing my bachelor degree with WAM approximately 78, I
                decided to further study to enrich my skill sets. The high and
                convincible reputation of USYD drove me to choose USYD as my
                master education provider.
                <br />
                <br />
                Now, the new journey starts; what would my future look like?...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
