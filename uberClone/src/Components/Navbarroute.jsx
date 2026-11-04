import React from 'react'
import { Navigate } from 'react-router-dom'

function Navbarroute({children}) {

    const loggeduser = JSON.parse(localStorage.getItem('loggeduser')) || ""


        return loggeduser == "" ? <Navigate to='/login' /> : children


}

export default Navbarroute