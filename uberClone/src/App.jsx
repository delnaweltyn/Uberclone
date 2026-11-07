import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Ride from './Components/Ride'
import Drive from './Components/Drive'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Navbarroute from './Components/Navbarroute'
import Mangeaccount from './Components/Mangeaccount'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Ride' element={
          <Navbarroute>
          <Ride />
          </Navbarroute>} />
        <Route path='/Drive' element={<Drive />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/manageaccount' element={< Mangeaccount />} />

      </Routes>
    </>
  )
}

export default App
