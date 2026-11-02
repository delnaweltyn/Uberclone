import React from 'react'
import Signup from './Signup'

function Login() {
  return (
    <div>
         <form onSubmit={handlecontinue} className='signup'>
            <span>What's your Phone Number or Email?</span>
            <br />
            <input  onChange={(e) =>setName(e.target.value)} type="text" placeholder='Enter Phone number or email' />
            <br />
            <button>Continue</button>
        </form>
    </div>
  )
}

export default Login