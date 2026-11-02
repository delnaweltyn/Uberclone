import React, { useState } from 'react'
import Signup from './Signup'
import { useNavigate } from 'react-router-dom'


function Login() {

    const [name,setName] = useState()

    const [user,setUser] = useState([])



    const navigate = useNavigate()

     const handlecontinue = ()=>{

        const username = JSON.parse(localStorage.getItem('user')) || []

        const exist = username.find((p)=>p.Name == name )


        if( exist )
        {
            localStorage.setItem('loggeduser',JSON.stringify(exist))
            navigate('/')
        }
        else{
            alert("Username is not valid, please signup")
            navigate('/Signup')
        }




     }

  return (
    <div>
          <h1 className='signuphead'>Uber</h1>
          <form onSubmit={handlecontinue} className='signup'>
            <span>What's your phone number or <br />email?</span>
            <br />
            <input  onChange={(e) =>setName(e.target.value)} type="text" placeholder='Enter Phone number or email' />
            <br />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login