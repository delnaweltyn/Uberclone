import React from 'react'
import Navbar from './Navbar'
import Location from './Location'
import './Home.css'
import Uberdetails from './Uberdetails'
import Footer from './Footer'

function Home() {
  return (
    <div>
          <Navbar />
          <Location />
          <Uberdetails />
          <Footer />

    </div>
  )
}

export default Home