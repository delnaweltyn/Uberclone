import React from 'react'
import './Navbarsec.css'

function Navbarsec() {
    return (
        <div>
            <div className='homeride'>
                <div className='innerhomeride'>
                    <div className='ride'>
                        <span style={{fontSize:25}}><strong>Ride</strong></span>
                    </div>


                    <div className='rideoption'>
                        <li className='rideoptionlist' type='none'>Request a ride</li>
                        <li className='rideoptionlist' type='none'>Reserve a ride</li>
                        <li className='rideoptionlist' type='none'>See prices</li>
                        <li className='rideoptionlist' type='none'>Explore ride options</li>
                        <li className='rideoptionlist' type='none'>Airport rides</li>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbarsec