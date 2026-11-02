import React from 'react'
import './Footer.css'
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { MdLocationPin } from "react-icons/md";

function Footer() {
  return (
    <div>
        <footer>
            <div className='footerheading'>
                <h2>Uber</h2>
                <h4>Visit Help Center</h4>
            </div>
            <hr />
            <nav className='mainfooternav'>
                <div className='firstfooternav'>
                    <h3>Company</h3>
                    <a href="#">About Us</a>
                    <a href="#">Our offerings</a>
                    <a href="#">Newsroom</a>
                    <a href="#">Investors</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                </div>

                <div className='secondfooternav'>
                    <h3>Products</h3>
                    <a href="#">Ride</a>
                    <a href="#">Drive</a>
                    <a href="#">Eat</a>
                    <a href="#">Uber for Business</a>
                    <a href="#">Uber Freight</a>
                    <a href="#">Gift cards</a>
                    <a href="#">Uber Health</a>

                </div>

                 <div className='Thirdfooternav'>
                    <h3>Global citizenship</h3>
                    <a href="#">Safety</a>
                    <a href="#">Sustainability</a>
                </div>

                <div className='fourthfooternav'>
                    <h3>Travel</h3>
                    <a href="#">Reserve</a>
                    <a href="#">Airports</a>
                    <a href="#">Hotels</a>
                    <a href="#">Cities</a>
                </div>

            </nav>

            <div className='socialmedia'>
                <div>

                <button className='mediabutton'><CiLinkedin />
                <span className="button-text">LinkedIn</span>
                </button>
                <button className='mediabutton'><CiYoutube />
                <span className="button-text">YouTube</span></button>
                <button className='mediabutton'><CiInstagram />
                <span className="button-text">Instagram</span></button>

                <button className='mediabutton'><FaXTwitter />
                <span className="button-text">Twitter</span></button>
                </div>

                <div className='locationdiv'>

                <button className='locationbutton'><TbWorld /> English</button>
                <button className='locationbutton'><MdLocationPin /> Thrissur</button>
                </div>



                </div>

            {/* </div> */}

            <div className='copyrightdiv'>
                <div className='firstcopy'>
                <p>©2026 Uber Technologies Inc.</p>
                </div>
                <div className='secondcopy'>
                    <a href="">Privacy</a>
                    <a href="">Accessibility</a>
                    <a href="">Terms</a>
                </div>
            </div>

        </footer>
        <button className='pricebutton'>See prices</button>
    </div>
  )
}

export default Footer