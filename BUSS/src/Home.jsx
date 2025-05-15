import React from 'react'
import Navba from './Navba'
import Fotter from './Fotter'
export default function Home() {
  return (
    <div>
      <Navba/>
      <div id='ani' className='d-flex justify-content-center'>
      <h2 style={{textShadow:'25px 14px 5px black',boxShadow:'19px 22px 12px 10px black'}} className='display-3 my-5 bg-dark text-warning text-uppercase text-center p-5 border border-secondary border-4 rounded-4 '> Welcome To Mh <br/>Bus Booking <br/> 
      <img style={{height:'30vh',borderRadius:'10vh',boxShadow:'10px 10px 8px black'}} id='imgg' src="https://toppng.com/uploads/preview/free-vector-red-travel-bus-clip-art-tour-bus-clip-art-11563268096q6j27gz51v.png" alt="" className='img-fluid '/></h2>
      </div>
      <Fotter/>
    </div>
  )
}
