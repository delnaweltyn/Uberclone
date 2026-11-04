import React, { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { TbLocationFilled } from "react-icons/tb";
import './Location.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { TbCircleDotFilled } from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa";
import { RiSquareFill } from "react-icons/ri";

function Location() {

    const navigate = useNavigate()

    const [pickuplocation,setPickuplocation] = useState("")
    const [destination,setDestination] = useState("")

    const userlogged = JSON.parse(localStorage.getItem('loggeduser')) || ""

    const handlesubmit = (e) => {
            e.preventDefault()



            navigate('/Login')



    }

        const handlesubmitlogin = (e) => {
            e.preventDefault()

            if( pickuplocation == "" || destination == "")
            {
                alert("Enter the pickup and destination location")
                return
            }
            else{
                navigate('/Ride')
            }


    }


    return (
        <div>
            {!userlogged ? (
            <div className='location'>

                <div className={`firstsec ${userlogged ? 'loggeinfirstsec' : 'loggeoutfirstsec'}`} >

                    <p> <IoLocationSharp /> Kerala, Thrissur <button aria-label="Change city" className="changecity">Change city</button> </p>


                    <div className='picklocation'>

                        <form onSubmit={handlesubmit}>
                            <h1>Go anywhere</h1>
                            <div className='pickup-container'>
                                {/* <IoTimeSharp /> */}
                            <select  className='pickupbutton' name="" id="">

                                <option value="Pickupnow"> Pickup now </option>
                                <option value="Schedule">Schedule later</option>


                            </select>
                            </div>
                        <br /><br />
                            <input  className='forminput' type="text" placeholder='Pickup location'  />
                            {/* <TbLocationFilled /> */}

                            <br /><br />
                            <input className='forminput' type="text" placeholder='Dropoff location' />
                            <br /><br />
                            <button className='formbutton'>See prices</button>
                        </form>

                    </div>
                </div>
                <div className='secondsec'>
                    <img width='500' height='400' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1344/height=896/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xOWIxYmI1OS1lMzJmLTRjM2EtYTk0Zi1jYzQyYjlkMDEyOGEucG5n" alt="" />

                </div>
            </div>) :

             <div className='locationlogin'>

                <div className='headinglogin'>
                    <h1>Get ready for your first trip</h1>
                </div>
                <div className='pickuplogin'>
                    <div className="pickup-input">

                        <TbCircleDotFilled className="pickup-icon" />

                        <input value={pickuplocation} onChange={(e)=>setPickuplocation(e.target.value)}
                            type="text"
                            placeholder="Pickup location"
                        />

                        <FaLocationArrow className="location-arrow" />



                    </div>

                        <div className="pickup-input">

                        <RiSquareFill className="pickup-icon" />

                        <input value={destination} onChange={(e)=>setDestination(e.target.value)}
                            type="text"
                            placeholder="Dropoff location"
                        />




                    </div>
                    <button onClick={handlesubmitlogin} className='pricebuttonlogin'>See prices</button>
                </div>

             </div>
               }
        </div>
    )
}

export default Location