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



function Ride() {


  const [selectedride, setSelectedride] = useState("Taxi")
  const [showPayment, setShowPayment] = useState(false);

  const [selectedpayment,setSelectedpayment] = useState("")
  const [isoption,setIsoption ] = useState(false)



  const handlepayment = (item) =>{
    setSelectedpayment(item)
    console.log(selectedpayment)
    alert(`payment option selected is ${selectedpayment} please confirm`);
    setShowPayment(false)
    setIsoption(true)
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

               {/* paymentdetails */}
      <div className='mainpaymentdiv'>
        <div onClick={() => setShowPayment(true)} className='payment_option'>
          <FaPlus />
          <span>{selectedpayment || 'Add payment method'}</span>


          <MdKeyboardArrowDown />
        </div>
        <button className="request-button">
          {`Request ${selectedride}`}
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



    </div>
  )
}

export default Ride