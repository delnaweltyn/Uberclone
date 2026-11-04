import React from 'react'
import { MdOutlinePeople } from "react-icons/md";
import './Ride.css'
import { useState } from 'react';
import { IoFlashOutline } from "react-icons/io5";
import { FaPlus } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TbCashBanknote } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import UberMap from './UberMap';
import { FaHeart } from "react-icons/fa";



function Ride() {


  const [selectedride, setSelectedride] = useState("Taxi")
  const [showPayment, setShowPayment] = useState(false);

  const [selectedpayment,setSelectedpayment] = useState("")
  const [isoption,setIsoption ] = useState(false)
  const [showFavourite, setShowFavourite] = useState(false)



    const selectedDriver = {
    id: 1,
    name: "John"
  }

  // Get favourite drivers from localStorage
  const [favouriteDrivers, setFavouriteDrivers] = useState(
    () => JSON.parse(localStorage.getItem('favouriteDrivers')) || []
  )

  // Selected favourite driver
  const [requestedDriver, setRequestedDriver] = useState("")

  const Handlerequestride = ()=>{
    alert("Ride booked and completed successfully")
    localStorage.setItem('Ridestatus',JSON.stringify("Completed"))
    setShowFavourite(true)
  }


  const handleAddFavourite = () => {

      const exists = favouriteDrivers.some(
      driver => driver.id === selectedDriver.id
    )

    if (!exists) {

      const updatedDrivers = [
        ...favouriteDrivers,
        selectedDriver
      ]

      setFavouriteDrivers(updatedDrivers)

      localStorage.setItem(
        'favouriteDrivers',
        JSON.stringify(updatedDrivers)
      )

      alert("Driver added to your favourite list!")

    } else {
      alert("Driver already exists in your favourite list!")
    }

    setShowFavourite(false)
  }

  // Close favourite popup
  const handleNoFavourite = () => {
    setShowFavourite(false)
  }

  const handlepayment = (item) =>{
    setSelectedpayment(item)
    console.log(selectedpayment)
    alert(`payment option selected is ${selectedpayment} please confirm`);
    setShowPayment(false)
    setIsoption(true)
  }

    const handleSelectDriver = (driverId) => {

    setRequestedDriver(
      requestedDriver === driverId ? "" : driverId
    )
  }

  return (
      <div>
      <div className='riderpage'>
      <div className='mainridediv'>
        <h1>Choose a Ride</h1>
        <div className={`Taxi ${selectedride === "Taxi" ? "selected" : ""}`} onClick={() => setSelectedride("Taxi")}>
          <img className='taxiimg' src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/Taxi_v1.png" alt="" />
          <div className='Taxidetails'>
            <p>Taxi
              <span> <MdOutlinePeople /></span>
              <span>4</span>
            </p>
            <p>2 mins away</p>
            <p><IoFlashOutline />Faster</p>
          </div>
          <div className='ratedetails'>
            <h3>RS.550</h3>
          </div>

        </div>
        <div className={`Taxi ${selectedride === "UberX" ? "selected" : ""}`} onClick={() => setSelectedride("UberX")}>
          <img className='taxiimg' src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/Regular/Sedan-160-0.png" alt="" />
          <div className='Taxidetails'>
            <p>UberX
              <span> <MdOutlinePeople /></span>
              <span>4</span>
            </p>
            <p>14 mins away</p>
            <p>Affordable everyday trip</p>
          </div>
          <div className='ratedetails'>
            <h3>RS.850</h3>
          </div>

        </div>
        <div className={`Taxi ${selectedride === "Comfort" ? "selected" : ""}`} onClick={() => setSelectedride("Comfort")}>
          <img className='taxiimg' src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/Regular/SedanComfort-016-0.png" alt="" />
          <div className='Taxidetails'>
            <p>Comfort
              <span> <MdOutlinePeople /></span>
              <span>4</span>
            </p>
            <p>5 mins away</p>
            <p>Newer car with extra legroom</p>
          </div>
          <div className='ratedetails'>
            <h3>RS.1500</h3>
          </div>



        </div>


        {favouriteDrivers.length > 0 && (

            <div className='request-favourite'>

              <h3>
                <FaHeart /> Request a Favourite Driver
              </h3>

              <p>Choose your preferred driver (optional)</p>

              {favouriteDrivers.map(driver => (

                <div
                  key={driver.id}
                  className={`favourite-driver-option ${
                    requestedDriver === driver.id ? "driver-selected" : ""
                  }`}
                  onClick={() => handleSelectDriver(driver.id)}
                >

                  <span>{driver.name}</span>

                  <input
                    type="checkbox"
                    checked={requestedDriver === driver.id}
                    onChange={() => handleSelectDriver(driver.id)}
                  />

                </div>

              ))}

              {requestedDriver && (
                <p className='selected-driver-message'>
                  Favourite driver selected!
                </p>
              )}

            </div>
          )}


               {/* paymentdetails */}
      <div className='mainpaymentdiv'>
        <div onClick={() => setShowPayment(true)} className='payment_option'>
          <FaPlus />
          <span>{selectedpayment || 'Add payment method'}</span>


          <MdKeyboardArrowDown />
        </div>
        <button onClick={Handlerequestride} className="request-button">{`Request ${selectedride}`}
        </button>
      </div>
      </div>



      <div className="map-section">

                <UberMap />

      </div>

</div>
      {showPayment && (
        <div className='payment-overlay'>
        <div className='payment-dialog'>
          <div className='payment-heading'>
          <h1>Add a payment Method</h1>
          </div>
          <div className='payment-method'>

            <span onClick={()=>handlepayment('Cash')} className='payment-text' >
              <img width={'30'} src="https://tb-static.uber.com/prod/wallet/icons_v2/cash_3x.png" alt="" />
             Cash
             </span>

            <span onClick={()=>handlepayment('Card')}  className='payment-text'><CiCreditCard1 /> Card  </span>
          </div>
          <button onClick={()=>setShowPayment(false)}>Close</button>

        </div>
        </div>
      )}

 {showFavourite && (
        <div className='favourite-overlay'>

          <div className='favourite-dialog'>

            <h2>Add Favourite Driver</h2>

            <p>
              Would you like to add
              <strong> {selectedDriver.name} </strong>
              to your favourite drivers?
            </p>

            <div className='favourite-buttons'>

              <button onClick={handleNoFavourite}>
                No
              </button>

              <button onClick={handleAddFavourite}>
                Yes
              </button>

            </div>

          </div>

        </div>
      )}


    </div>
  )
}

export default Ride