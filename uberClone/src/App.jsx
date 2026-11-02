import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Ride from './Components/Ride'
import Drive from './Components/Drive'
import Signup from './Components/Signup'
import Login from './Components/Login'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Ride' element={<Ride />} />
        <Route path='/Drive' element={<Drive />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />

      </Routes>
    </>
  )
}

export default App
