import React, { useState } from 'react'
import './Manageaccount.css'
import Accounthome from './Accounthome'
import Personalinfo from './Personalinfo'
import Privacy from './Privacy'
import Security from './Security'

function Mangeaccount() {


    const [buttonstatus,setButtonstatus] = useState("Home")

  return (
    <div>
         <div className='manageaccount'>
            <nav className='heading-account'>
                <h2>uber account</h2>
            </nav>
            <div className='account-overlay'>
            <nav className='sidebar-account'>
                <button className={ buttonstatus == 'Home' ? 'selected' : ""} onClick={()=>setButtonstatus("Home")}>Home</button>
                <button className={ buttonstatus == 'Info' ? 'selected' : ""} onClick={()=>setButtonstatus("Info")}>Personal info</button>
                <button className={ buttonstatus == 'Security' ? 'selected' : ""} onClick={()=>setButtonstatus("Security")}> Security</button>
                <button className={ buttonstatus == 'Privacy' ? 'selected' : ""} onClick={()=>setButtonstatus("Privacy")}>Privacy & data</button>
            </nav>

    { buttonstatus == 'Home' &&
        <div>
            <Accounthome />
        </div>
    }
    { buttonstatus == 'Info' &&
        <div>
            <Personalinfo />
        </div>
    }
    { buttonstatus == 'Security' &&
        <div>
            <Security />
        </div>
    }
    { buttonstatus == 'Privacy' &&
        <div>
            <Privacy />
        </div>
    }

        </div>
         </div>


    </div>
  )
}

export default Mangeaccount