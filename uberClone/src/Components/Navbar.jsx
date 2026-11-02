import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
import { TbWorld } from "react-icons/tb";
import { RiSteering2Line } from "react-icons/ri";
import { RiRouteFill } from "react-icons/ri";
import { MdAddBusiness } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosHelpBuoy } from "react-icons/io";
import { BsFillWalletFill } from "react-icons/bs";
import { RxActivityLog } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [isAboutOpen, setIsAboutOpen] = useState(false)

    const userlogged = JSON.parse(localStorage.getItem('loggeduser')) || ""

   let username = "";
   let displayName = "";

    if(userlogged)
    {
         username =userlogged.Name.split('@')[0];
         displayName = username.charAt(0).toUpperCase() + username.slice(1);
    }

    const navigate = useNavigate()

    const handlesignout =()=>
    {
        localStorage.setItem('loggeduser',JSON.stringify(""))
        navigate('/')

    }


    return (
        <div>
            {/* first section */}
            <div className='navbarsec'>
                <nav className={`navbar ${userlogged ? 'loggedin' : 'loggedout'}`} >
                    <div className='mainnav'>

                        <div className={`heading ${userlogged ? 'loggedinheading' : 'loggedoutheading'}`}>
                            Uber
                        </div>

                        <div className='firstnav'>

                            <Link className={`NavClass ${userlogged ? 'loggeinavbutton' : 'loggeoutnavbutton'}`} to={'/Ride'}>Ride</Link>
                            <Link className={`NavClass ${userlogged ? 'loggeinavbutton' : 'loggeoutnavbutton'}`} to={'/Drive'}>Drive</Link>
                            <Link className={`NavClass ${userlogged ? 'loggeinavbutton' : 'loggeoutnavbutton'}`} to={'/Business'}>Business</Link>
                            <Link className={`NavClass ${userlogged ? 'loggeinavbutton' : 'loggeoutnavbutton'}`} to={'/UberEats'}>UberEats</Link>
                            <button className={`NavClass aboutbutton ${userlogged ? 'loggeinavbutton' : 'loggeoutnavbutton'}`}   onClick={() => setIsAboutOpen(!isAboutOpen)}>About
                                {!isAboutOpen ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}


                            </button>

                            {isAboutOpen && (
                                <div className="about-dropdown">
                                    <Link className="Aboutdropdown" to="/Ride">About Us</Link>
                                    <Link className="Aboutdropdown" to="/Drive">Our Offerings</Link>
                                    <Link className="Aboutdropdown" to="/Business">How Uber Works</Link>
                                    <Link className="Aboutdropdown" to="/UberEats">Sustainability</Link>
                                    <Link className="Aboutdropdown" to="/UberEats">Explore</Link>
                                    <Link className="Aboutdropdown" to="/UberEats">Newsroom</Link>
                                    <Link className="Aboutdropdown" to="/UberEats">Investor relations</Link>
                                    <Link className="Aboutdropdown" to="/UberEats">Autonomous</Link>
                                    <Link className="Aboutdropdown" to="/UberEats">Blog</Link>
                                    <Link className="Aboutdropdown" to="/UberEats">Careers</Link>
                                </div>
                            )}
                        </div>

                        <div className='second_nav'>

                            {!userlogged ? (
                                <>
                                    <Link className={`NavClass ${userlogged ? 'loggeinavbutton' : 'loggeoutnavbutton'}`} to={'/Ride'}> <TbWorld /> EN</Link>
                                    <Link className={`NavClass ${userlogged ? 'loggeinavbutton' : 'loggeoutnavbutton'}`} to={'/Drive'}>Help</Link>
                                    <Link className={`NavClass ${userlogged ? 'loggeinavbutton' : 'loggeoutnavbutton'}`} to={'/Login'}>Login</Link>
                                    <div>
                                        <button onClick={() => setIsOpen(!isOpen)} className='signupbutton' >
                                            SignUp
                                        </button>
                                    </div>


                                    {isOpen && (
                                        <div className="signup-dropdown">
                                            <Link className="Navdropdown" to="/Signup">Ride <RiRouteFill /></Link>
                                            <Link className="Navdropdown" to="/Signup">Drive <RiSteering2Line /></Link>
                                            <Link className="Navdropdown" to="/Signup">Business <MdAddBusiness /></Link>
                                            <Link className="Navdropdown" to="/Signup">Uber Eats <ImSpoonKnife /></Link>
                                        </div>
                                    )}

                                </>) :

                                <div className='secondnavlogin'>
                                    <Link className={`NavClass ${userlogged ? 'loggeinavbutton' : 'loggeoutnavbutton'}`} to={'/Ride'}> <TbWorld /> EN</Link>
                                    <Link className={`NavClass ${userlogged ? 'loggeinavbutton' : 'loggeoutnavbutton'}`} to={'/Drive'}>Help</Link>


                                    <button onClick={() => setIsOpen(!isOpen)} className='signupbutton userlogged' >
                                        {username} {!isOpen ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
                                    </button>


                                    {isOpen && (
                                        <div className="loginuser-dropdown">
                                            <div className='first_profilediv'>
                                            <h1 style={{fontSize:"50px"}}>{displayName} <FaUserCircle /></h1>

                                            </div>
                                            <div className='second_profilediv'>
                                            <button className='loginbutton' ><IoIosHelpBuoy /><br /> Help</button>
                                             <button className='loginbutton'><BsFillWalletFill /><br /> Wallet</button>
                                            <button className='loginbutton'><RxActivityLog  /><br /> Activity</button>


                                            </div>
                                            <div className='Third_profilediv'>
                                            <hr />

                                            <Link className="Navdropdown-login" to="/Signup"><FaUser /> Manage Account </Link>
                                            <Link className="Navdropdown-login" to="/Signup"><RiRouteFill /> Ride </Link>
                                            <Link className="Navdropdown-login" to="/Signup"><RiSteering2Line /> Drive & Deliver </Link>
                                            <Link className="Navdropdown-login" to="/Signup"><MdAddBusiness /> Uber for Business </Link>
                                            <Link className="Navdropdown-login" to="/Signup"><ImSpoonKnife /> Uber Eats </Link>
                                            <button onClick={handlesignout} className='signoutbutton' >Sign out</button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            }

                        </div>


                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar