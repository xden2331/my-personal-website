import React from 'react'

class Skills extends React.Component {
  render () {
    return (
      <div className='skills container pb-5'>
        {/* Title */}
        <div className='row text-center d-flex align-items-center justify-content-center h2 pb-4'>
          <hr
            className='d-none d-md-inline-block'
            style={{ backgroundColor: 'black' }}
          />
          My Skills
          <hr
            className='d-none d-md-inline-block'
            style={{ backgroundColor: 'black' }}
          />
        </div>

        {/* SKill sets */}
        <div className='row d-flex py-3 justify-content-center'>
          <div className='d-none d-sm-inline-block col-12 col-md-6 mb-4 p-0 order-2'>
            <div
              className='image'
              style={{
                backgroundImage:
                  "url('https://miro.medium.com/max/1200/1*Y4Td-XMRtuFAW_8CpO7KyA.png')"
              }}
            />
          </div>
          <div className='col-12 col-md-6 order-1'>
            <div className='ui'>
              <div className='content ml-2'>
                <div className='header'>
                  <p className='h3'>
                    Front-end skills
                  </p>
                </div>

                <div
                  className='meta mb-3 font-weight-bold'
                  style={{ color: '#5e9516' }}
                >
                  <p>Maybe you wanna know my front-end skills?</p>
                </div>

                <p className='description'>
                  <ul className='p-0'>
                    <li>
                      <p>
                      HTML, CSS, JavaScript...
                      </p>
                    </li>
                    <li>Skill two</li>
                    <li>Skill three</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row d-flex py-3 justify-content-center'>
          <div className='d-none d-sm-inline-block col-12 col-md-6 mb-4 p-0 order-2'>
            <div
              className='image'
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')"
              }}
            />
          </div>
          <div className='col-12 col-md-6 order-1'>
            <div className='ui'>
              <div className='content ml-2'>
                <div className='header'>
                  <p className='h3'>
                    Back-end skills
                  </p>
                </div>

                <div
                  className='meta mb-3 font-weight-bold'
                  style={{ color: '#5e9516' }}
                >
                  <p>Maybe you wanna know my front-end skills?</p>
                </div>

                <p className='description'>
                  This should be a list of my back-end skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
