import { SVG } from 'leaflet'
import React from 'react'

function Privacy() {
    return (
        <div>
            <div className='personalinfo'>
                <h1>Privacy & data</h1>
                <h3>Privacy</h3>
                <div>
                    <p>Privacy Centre</p>
                    <div className='securitydetails' >

                        <p>Take control of your privacy and learn how we protect it.</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#C4C4C4"><path d="M12.21 7.5H8.48L11.8 12l-3.32 4.5h3.73l3.31-4.5-3.31-4.5Z" fill="currentColor"></path></svg>
                    </div>
                    <hr />
                </div>

                <div>
                    <p>Communication preferences</p>
                    <div className='securitydetails' >
                        <p>Manage how Uber contacts you.</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#C4C4C4"><path d="M12.21 7.5H8.48L11.8 12l-3.32 4.5h3.73l3.31-4.5-3.31-4.5Z" fill="currentColor"></path></svg>
                    </div>
                    <hr />
                </div>

                <h1 className='privacylasthead'>Third-party apps with account access</h1>
                <p className='privacylastpara'>Once you allow access to third-party apps, you'll see them here. <a href="#">Learn more</a></p>
            </div>
        </div>
    )
}

export default Privacy