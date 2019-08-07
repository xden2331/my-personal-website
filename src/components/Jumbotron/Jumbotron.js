import React from 'react'
import './style.css'

class Jumbotron extends React.Component {
  constructor (props) {
    super(props)
    this.state = { width: 0, height: 0 }
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  componentDidMount () {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  render () {
    return (
      <div
        className='jumbotron-class
                text-center justify-content-center
                p-0 m-0 d-flex align-items-center'
        style={{ width: this.state.width, height: this.state.height }}
      >
        <div className='jumbotron-content'>
          <div className='jumbotron-header'>
            <h4>
              <p className='m-0'>
                <em>Hey, I'm</em>
              </p>
            </h4>
          </div>

          <div className='jumbotron-title'>
            <h1 className='d-flex align-items-center m-0'>
              <hr />
              <p className='m-0 text-uppercase font-weight-bold'>Richard Deng</p>
              <hr />
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Jumbotron
