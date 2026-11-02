import React, { useState } from 'react'
import Navbar from './Navbar'
import './Signup.css'
import { useNavigate } from 'react-router-dom'

function Signup() {

   const [name,setName] = useState("")
   const navigate = useNavigate()

   const handlecontinue = (e)=>{
      e.preventDefault()



      const accountuser = JSON.parse(localStorage.getItem('user')) || []

      const newuser = {
        Name : name
      }

      const nameexist = accountuser.find((item)=>item.Name == name )

      console.log(nameexist)

      if(nameexist)
      {
        alert("user exist, please login")
        navigate('/Login')
        return
      }

      const upadteduser = [...accountuser,newuser]
      localStorage.setItem('user',JSON.stringify(upadteduser));
      alert("user added,please login")
      setName("")
      navigate('/Login')
   }

  return (
    <div>
        <div className='signup-container'>
        <h1 className='signuphead'>Uber</h1>
        <form onSubmit={handlecontinue} className='signup'>
            <span>What's your phone number or <br />email?</span>
            <input value={name} onChange={(e) =>setName(e.target.value)} type="text" placeholder='Enter phone number or email' required />
            <br />
            <button>Sign Up</button>
        </form>
        </div>
    </div>
  )
}

export default Signup