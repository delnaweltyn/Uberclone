import React, { useState } from 'react'
import { useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa'

function Personalinfo() {

const [loggeduser, setLoggeduser] = useState(
    JSON.parse(localStorage.getItem('loggeduser')) || {}
)

const [loggedusername, setLoggedusername] = useState(
    JSON.parse(localStorage.getItem('loggedusername')) || ""
)

  return (
    <div>

    <div  className='personalinfo'>

        <h1>Personal info</h1>
        <FaUserCircle className='account-icon' />

                <div>
                    <p>Name</p>
                    <div className='securitydetails' >
                        <p>{loggedusername}</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#C4C4C4"><path d="M12.21 7.5H8.48L11.8 12l-3.32 4.5h3.73l3.31-4.5-3.31-4.5Z" fill="currentColor"></path></svg>
                    </div>
                    <hr />
                </div>

                <div>
                    <p>Phone Number </p>
                    <div className='securitydetails' >
                        <p>Add your Phone Number</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#C4C4C4"><path d="M12.21 7.5H8.48L11.8 12l-3.32 4.5h3.73l3.31-4.5-3.31-4.5Z" fill="currentColor"></path></svg>
                    </div>
                    <hr />
                </div>

                <div>
                    <p>Email </p>
                    <div className='securitydetails' >

                          <p >{loggeduser.Name}</p>


                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#C4C4C4"><path d="M12.21 7.5H8.48L11.8 12l-3.32 4.5h3.73l3.31-4.5-3.31-4.5Z" fill="currentColor"></path></svg>
                    </div>
                    <hr />
                </div>

                      <div>
                    <p>Language </p>
                    <div className='securitydetails' >
                        <p>English</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#C4C4C4"><path d="M12.21 7.5H8.48L11.8 12l-3.32 4.5h3.73l3.31-4.5-3.31-4.5Z" fill="currentColor"></path></svg>
                    </div>
                    <hr />
                </div>


    </div>
    </div>
  )
}

export default Personalinfo