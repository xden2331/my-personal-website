import React from 'react'

import Jumbotron from './Jumbotron/Jumbotron'
import PersonalDetail from './PersonalDetail/PersonalDetail'

const App = () => {
  return (
    <div className='app'>
      <Jumbotron />
      <div>
        <PersonalDetail />
      </div>
    </div>
  )
}

export default App
