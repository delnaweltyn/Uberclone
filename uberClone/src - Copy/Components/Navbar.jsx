import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <div className='navbarsec'>
        <nav className='firstnav'>
            <h1 className='heading'>Uber</h1>
            <Link className="NavClass" to={'/Ride'}>Ride</Link>
            <Link className="NavClass" to={'/Drive'}>Drive</Link>
            <Link className="NavClass" to={'/Business'}>Business</Link>
            <Link className="NavClass" to={'/UberEats'}>UberEats</Link>
            <Link className="NavClass" to={'/About'}>
                <select name="" id="">
                    <option value="">About</option>
                    <option value="">About us</option>
                    <option value="">our offering</option>
                    <option value="">How uber works</option>
                </select>
            </Link>

        </nav>
       <div>
        <nav className='second_nav'>
            <Link className="NavClass" to={'/Ride'}>EN</Link>
            <Link className="NavClass" to={'/Drive'}>Help</Link>
            <Link className="NavClass" to={'/Login'}>Login</Link>
            <Link className="NavClass" to={'/Signup'}>SignUp</Link>
        </nav>

        </div>
        </div>
    </div>
  )
}

export default Navbar