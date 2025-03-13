import React from 'react'
import {Route,Routes} from 'react-router-dom'
import ApplyJob from './pages/ApplyJob'
import Home from './pages/Home'
import Applications from './pages/Applications'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/application' element={<Applications />} />



      </Routes>
    </div>
  )
}

export default App

