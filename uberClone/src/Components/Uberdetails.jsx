import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Uberdetails.css'

function Uberdetails() {

    const userlogged = JSON.parse(localStorage.getItem('loggeduser')) || ""
    return (
        <div>
            <div className={`uberdetails ${userlogged ? 'loggeinuberdetails' : 'loggeoutuberdetails'}`} >
                <h1 style={{ marginLeft: '50px', paddingTop: '20px' }}>Explore what you can do with Uber</h1>
                <div className='carddetails'>
                    <Card className={`card-container ${userlogged ? 'loggeincard-container' : 'loggeoutcard-container'}`}  style={{ width: '20rem', height: '10rem' }}>
                        <div className='carditems'>
                            <Card.Body>
                                <Card.Title>Ride</Card.Title>
                                <Card.Text>
                                    Go anywhere with Uber. Request a ride,hope in and go.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </div>
                        <Card.Img className='cardimage' variant="top" src="https://mobile-content.uber.com/launch-experience/nava-icons-may-2026/light-mode/Sedan-160-temp.png" />
                    </Card>
                    <Card className={`card-container ${userlogged ? 'loggeincard-container' : 'loggeoutcard-container'}`}  style={{ width: '20rem',height: '10rem'  }}>
                        <div className='carditems'>
                            <Card.Body>
                                <Card.Title>Reserve</Card.Title>
                                <Card.Text>
                                    Reserve your ride in advance so you can relax on the day of your trip
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </div>
                        <Card.Img className='cardimage' variant="top" src="https://cn-geo1.uber.com/static/mobile-content/launch-experience/nava-icons-may-2026/light-mode/Calendar-351-temp.png" />
                    </Card>
                    <Card className={`card-container ${userlogged ? 'loggeincard-container' : 'loggeoutcard-container'}`}  style={{ width: '20rem',height:'10rem'  }}>
                        <div className='carditems'>
                            <Card.Body>
                                <Card.Title>Airport</Card.Title>
                                <Card.Text>
                                    Request a ride to or from the airport with room for your luggage
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </div>
                        <Card.Img className='cardimage' variant="top" src="	https://tb-static.uber.com/prod/uber-static/airport-nava-tile.png" />
                    </Card>
                    <Card className={`card-container ${userlogged ? 'loggeincard-container' : 'loggeoutcard-container'}`}  style={{ width: '20rem',height:'10rem'  }}>
                        <div className='carditems'>
                            <Card.Body>
                                <Card.Title>Taxi</Card.Title>
                                <Card.Text>
                                    Request a local taxi and pay through the uber app
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </div>
                        <Card.Img className='cardimage' variant="top" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/Taxi_v1.png" />
                    </Card>
                    <Card className={`card-container ${userlogged ? 'loggeincard-container' : 'loggeoutcard-container'}`}  style={{ width: '20rem',height:'10rem'  }}>
                        <div className='carditems'>
                            <Card.Body>
                                <Card.Title>Seniors</Card.Title>
                                <Card.Text>
                                    Request a ride with extra assistance, from your door to your destination
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </div>
                        <Card.Img className='cardimage' variant="top" src="https://cn-geo1.uber.com/static/mobile-content/launch-experience/nava-icons-may-2026/light-mode/PersonSenior-251-temp.png" />
                    </Card>
                </div>
            </div>

            {/* next section in uberdetails */}

            <div className={`requestridedetails ${userlogged ? 'loggeinrequestridedetails' : 'loggeoutrequestridedetails'}`} >
                <h1 style={{ marginLeft: '50px', paddingTop: '20px' }}>How to request a ride</h1>
                <div className='rideinfodetails'>
                    <div>
                    <Card.Img  variant="top" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=300/height=150/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy80OTI0NDgyZi00M2IyLTRkMTMtODg1OC1lYzVhODc0ZTIyNmIucG5n" />

                    <Card style={{ width: '20rem' }}>
                        <div className='carditems'>
                            <Card.Body>
                                <Card.Title style={{fontSize:'20px'}}>Get started</Card.Title>
                                <Card.Text>
                                    Enter your destinatio on Uber.com or in the Uber app. Choose a ride and confirm
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card.Img  variant="top" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=300/height=150/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9hNDZlNjBmYS00MzQ1LTQ0NTUtYTNjZC04NmEyMjk4MmMxOTIucG5n" />

                    <Card style={{ width: '20rem' }}>
                        <div className='carditems'>
                            <Card.Body>
                                <Card.Title style={{fontSize:'20px'}}>Get matched with a driver</Card.Title>
                                <Card.Text>
                                    A nearby driver accepted your request. You will be notified when they are close
                                </Card.Text>
                            </Card.Body>
                        </div>

                    </Card>
</div>
<div>
                    <Card.Img  variant="top" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=300/height=150/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9jYTQyYmZjNC1lMjhhLTRhZWEtYTE2YS1lMWYwNjQ3MGZhY2UucG5n" />

                    <Card style={{ width: '20rem' }}>
                        <div className='carditems'>
                            <Card.Body>
                                <Card.Title style={{fontSize:'20px'}}>Meet your driver</Card.Title>
                                <Card.Text>
                                    Verify yours driver name, vehicle details and your destination, then enter the vehicle
                                </Card.Text>
                            </Card.Body>
                        </div>

                    </Card>
</div>
                </div>
            </div>

        </div>
    )
}

export default Uberdetails