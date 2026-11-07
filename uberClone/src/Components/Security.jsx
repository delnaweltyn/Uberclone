import React from 'react'

function Security() {
    return (
        <div>
            <div className='personalinfo'>
                <h1>Security</h1>
                <h3>Logging in to Uber</h3>

                <div>
                    <p>Passkeys</p>
                    <div className='securitydetails' >
                        <p>Passkeys are easier and more secure than passwords.</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#C4C4C4"><path d="M12.21 7.5H8.48L11.8 12l-3.32 4.5h3.73l3.31-4.5-3.31-4.5Z" fill="currentColor"></path></svg>
                    </div>
                    <hr />
                </div>

                <div>
                    <p>Password</p>
                    <div className='securitydetails' >
                        <p></p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#C4C4C4"><path d="M12.21 7.5H8.48L11.8 12l-3.32 4.5h3.73l3.31-4.5-3.31-4.5Z" fill="currentColor"></path></svg>
                    </div>
                    <hr />
                </div>

                <div>
                    <p>Authenticator app</p>
                    <div className='securitydetails' >
                        <p>Set up your authenticator app to add an extra layer of security.</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#C4C4C4"><path d="M12.21 7.5H8.48L11.8 12l-3.32 4.5h3.73l3.31-4.5-3.31-4.5Z" fill="currentColor"></path></svg>
                    </div>
                    <hr />
                </div>

                <div>
                    <p>2-step verification</p>
                    <div className='securitydetails' >
                        <p>Add additional security to your account with 2-step verification.</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#C4C4C4"><path d="M12.21 7.5H8.48L11.8 12l-3.32 4.5h3.73l3.31-4.5-3.31-4.5Z" fill="currentColor"></path></svg>
                    </div>
                    <hr />
                </div>

                <div>
                    <p>Recovery phone</p>
                    <div className='securitydetails' >
                        <p>Add a backup phone number to access your account.</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#C4C4C4"><path d="M12.21 7.5H8.48L11.8 12l-3.32 4.5h3.73l3.31-4.5-3.31-4.5Z" fill="currentColor"></path></svg>
                    </div>
                    <hr />
                </div>

            </div>
        </div>
    )
}

export default Security