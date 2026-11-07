import React from 'react'
import { BiFontSize } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";

function Accounthome() {


    const loggedusername = JSON.parse(localStorage.getItem('loggedusername')) || ""
    const loggeduser = JSON.parse(localStorage.getItem('loggeduser')) || {}

  return (
    <div>
        <div className='homeaccount'>
            <FaUserCircle className='account-icon' />
            <h1>{loggedusername}</h1>
             <p>{loggeduser.Name}</p>

             <div className='homeaccountbuttons'>
                <button ><RiAccountCircleLine /><br />Personal info</button>
                <button><MdOutlineSecurity /> <br />Security</button>
                <button><SiGnuprivacyguard /> <br />Privacy & data</button>
             </div>


        </div>
    </div>
  )
}

export default Accounthome