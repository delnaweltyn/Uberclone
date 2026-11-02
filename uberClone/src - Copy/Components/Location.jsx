import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { TbLocationFilled } from "react-icons/tb";
import './Location.css'

function Location() {
  return (
    <div>
        <div className='location'>

          <div className='firstsec'>

            <p> <IoLocationSharp  /> Kerala, Thrissur <button aria-label="Change city" class="changecity">Change city</button> </p>


            <div className='picklocation'>

                <form>
                    <h1>Request a ride</h1>
                    <input  className='forminput' type="text"  placeholder='Pickup location' />
                    <TbLocationFilled />

                    <br /><br />
                    <input className='forminput' type="text"  placeholder='Dropoff location'/>
                    <br /><br />
                    <button className='formbutton'>See prices</button>
                </form>

            </div>
             </div>
           <div className='secondsec'>
            <img width='600' height='400' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1344/height=896/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xOWIxYmI1OS1lMzJmLTRjM2EtYTk0Zi1jYzQyYjlkMDEyOGEucG5n" alt="" />

            </div>
        </div>
    </div>
  )
}

export default Location