import React, { useState } from 'react'
import Navbar from './Navbar'
import './Signup.css'
import { useNavigate } from 'react-router-dom'

function Signup() {

   const [name,setName] = useState("")

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
        return
      }

      const upadteduser = [...accountuser,newuser]
      localStorage.setItem('user',JSON.stringify(upadteduser));
      alert("user added")
      setName("")
   }

  return (
    <div>
        <Navbar />
        <form onSubmit={handlecontinue} className='signup'>
            <span>What's your Phone Number or Email?</span>
            <br />
            <input value={name} onChange={(e) =>setName(e.target.value)} type="text" placeholder='Enter Phone number or email' />
            <br />
            <button>Continue</button>
        </form>
    </div>
  )
}

export default Signup