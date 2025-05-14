import { useLocation, useNavigate } from 'react-router-dom'
import './Select.css'
import { useState } from 'react';
export default function Select() {

  const [selectedOption,setselecteOption]=useState('')
  const [payment ,setpayment]=useState()
  const [final ,setfinal]=useState(false)
  

    const location = useLocation();
    const navigate = useNavigate();
    const bus = location.state?.bus;


    const done = async()=>{
      try{
        setpayment(true)
      const response = await fetch('http://localhost:8500/person',{
        method:'POST',
        headers:{'Content-type' : 'application/json'},
        body:JSON.stringify(bus)
      })
      const result =await response.json()
      if(result){
        localStorage.setItem('data',JSON.stringify(result))
      }
      alert('Booking are Completed')
    } catch(err){
      setpayment(false)
      console.log('Something Wrong happen',err)
      alert('Booking Failed')
    }
  }
   
  const handleRadioChange=(event)=>{
    setselecteOption(event.target.value)
  }

  const showpay=()=>{
    setpayment(false)
    
    setTimeout(() => {
    setfinal(true)      
    }, 3000);
  }
  
  return (
    <div>
        <div className="container">
            <h2 className="text-center">Bus Deatils</h2>
    
       
      {bus ?  (
          <div className="" style={{ maxWidth: "600px" }}>
          <p><strong>ID:</strong> {bus.ID}</p>
          <p><strong>BusNumber:</strong> {bus.BUS_Number}</p>
          <p><strong>From:</strong> {bus.Begininig}</p>
          <p><strong>To:</strong> {bus.Destination}</p>
          <p><strong>Date:</strong> {new Date(bus.Date).toLocaleString()}</p>
          <hr />
          <p><strong>Price:</strong> ₹{bus.Price}</p>
          <button className='btn btn-success p-2 text-uppercase' onClick={done}>pay</button>
         
         <br /> <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      ) : (
          <p className="text-danger fw-3 text-center">No bus data received.</p>
        )}
        
        </div>
<br />



{/*  */}
{payment &&
<div className={`main-content pay ${final ? 'blurred' : ''}`}>
  <h3 className='text-center bg-info'>Choose Your Payment Method</h3>
  <div className='d-flex justify-content-evenly'>
    <div>
      <label htmlFor="CC">Credit Card</label>&nbsp;&nbsp;
      <input type="radio" name="payment" value="CC" onChange={handleRadioChange} checked={selectedOption === 'CC'} />
    </div>
    <div>
      <label htmlFor="DC">Debit Card</label>&nbsp;&nbsp;
      <input type="radio" name="payment" value="DC" onChange={handleRadioChange} checked={selectedOption === 'DC'} />
    </div>
    <div>
      <label htmlFor="UPI">UPI</label>&nbsp;&nbsp;
      <input type="radio" name="payment" value="UPI" onChange={handleRadioChange} checked={selectedOption === 'UPI'} />
    </div>
    <div>
      <label htmlFor="CWC">Cash When Come</label>&nbsp;&nbsp;
      <input type="radio" name="payment" value="CWC" onChange={handleRadioChange} checked={selectedOption === 'CWC'} />
    </div>
  </div>

  <div className="mt-4">
    {selectedOption === 'CC' && (
      <div id="Credit" className="m-3 fs-4 fw-light">
        <h3 className="ms-5 mt-3 fw-bold text-uppercase">Credit Card</h3>
        <label>Card Number</label><br />
        <input className="bg-dark h4 text-light" type="number" placeholder="Enter Your Card number" /><br />
        <label>Card Expiry</label><br />
        <input className="bg-dark h4 text-light" type="text" maxLength="4" placeholder="Enter Card Expiry" /><br />
        <label>Enter Your CVV</label><br />
        <input className="bg-dark h4 text-light" type="password" maxLength="3" placeholder="Enter CVV" /><br />
        <button className="btn btn-secondary h5 mt-2" onClick={showpay}>Pay Now</button>
      </div>
    )}

    {selectedOption === 'DC' && (
      <div id="Debit" className="m-3 fs-4 fw-light">
        <h3 className="ms-5 mt-3 fw-bold text-uppercase">Debit Card</h3>
        <label>Card Number</label><br />
        <input className="bg-dark h4 text-light" type="number" placeholder="Enter Your Card number" /><br />
        <label>Card Expiry</label><br />
        <input className="bg-dark h4 text-light" type="text" maxLength="4" placeholder="Enter Card Expiry" /><br />
        <label>Enter Your CVV</label><br />
        <input className="bg-dark h4 text-light" type="password" maxLength="3" placeholder="Enter CVV" /><br />
        <button className="btn btn-success h5 mt-2" onClick={showpay}>Pay Now</button>
      </div>
    )}

    {selectedOption === 'UPI' && (
      <div className="m-3 fs-4 fw-light">
        <label className="fs-3 text-uppercase text-secondary fw-bolder">Name: Trimbakshwar Mandhir</label><br />
        <img className="ms-4" src="image-1.jpeg" alt="UPI QR Code" style={{ width: '200px' }} />
      </div>
    )}

    {selectedOption === 'CWC' && (
      <div className="text-center mt-3">
        <h4 className="text-success">You have selected Cash When Come. Please carry cash when boarding.</h4>
      <button className='btn btn-outline-secondary'>sumbit</button>
      </div>
    )}
  </div>
</div>}
{/*  */}


{final &&
  <div className='popup-wrapper'>
  <div className='pop'>
<div className='finals'>
  <h2 className='text-center'>MH Booking 🚌🚍 </h2>
<div className='final'>
  <h4 className='text-center'>Booking are Completed <br />Come On Time</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img className='img-fluid' style={{height:'40vh',borderRadius:'2px 40px' , boxShadow: '10px 11px 10px black'}} src="https://cdn.dribbble.com/users/1187836/screenshots/7049426/media/7b3ab8c1fff5cdb8fa3e2fcc53c18dfb.gif" alt="" />
  </div>
    <button className='btn btn-outline-dark'>Back To Main</button>
  </div>
  </div>
  </div>}


      
      </div>
)

}
