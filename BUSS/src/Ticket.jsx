import {  useState } from 'react';
import Navba from './Navba';
import Fotter from './Fotter';
import './Ticket.css'
import { useNavigate } from 'react-router-dom';
export default function Ticket() {
    const allBus=[
        
            {
              "ID": "Fausto_Koepp",
              "BUS_Number": "739-744-6104",
              "Begininig": "KohlaPur",
              "Destination": "Nagpur",
              "Date": "2024-05-31T08:17:18.864Z",
              "Price": "752"
            },
            {
              "ID": "Marlee6",
              "BUS_Number": "338-716-9111 x24510",
              "Begininig": "Jalgaon",
              "Destination": "Akhola",
              "Date": "2025-05-03T18:41:26.079Z",
              "Price": "745"
            },
            {
              "ID": "Elian97",
              "BUS_Number": "286-756-8250",
              "Begininig": "Pune",
              "Destination": "solapur",
              "Date": "2024-10-16T05:04:28.183Z",
              "Price": "849 "
            },
            {
              "ID": "Earl.OHara",
              "BUS_Number": "183.773.4563",
              "Begininig": "Wolfftown",
              "Destination": "East Laishashire",
              "Date": "2024-06-24T09:52:20.878Z",
              "Price": "654"
            },
            {
              "ID": "Ubaldo0",
              "BUS_Number": "993-022-2948",
              "Begininig": "Mumbai",
              "Destination": "Jalgaon",
              "Date": "2025-02-28T20:47:01.022Z",
              "Price": "851"
            },
            {
              "ID": "Broderick.Dibbert92",
              "BUS_Number": "617-911-0349 x722",
              "Begininig": "Jalgaon",
              "Destination": "Goa",
              "Date": "2024-10-01T15:05:13.333Z",
              "Price": "645"
            },
            {
              "ID": "Carroll_Hilll21",
              "BUS_Number": "751.673.3902",
              "Begininig": "Goa",
              "Destination": "Jalagon",
              "Date": "2025-04-29T06:15:22.236Z",
              "Price": "844 "
            },
            {
              "ID": "Coby.Bartoletti",
              "BUS_Number": "1-804-941-1731 x98189",
              "Begininig": "Bhuldhana",
              "Destination": "Mumbai",
              "Date": "2024-05-12T04:04:20.103Z",
              "Price": "732"
            },
            {
              "ID": "Gus_Ziemann",
              "BUS_Number": "(467) 476-0424 x526",
              "Begininig": "Jalgaon",
              "Destination": "Shirdi",
              "Date": "2024-07-13T00:06:33.912Z",
              "Price": "714"
            },
            {
              "ID": "Callie.OConner59",
              "BUS_Number": "1-455-256-1431 x86649",
              "Begininig": "Shirdi",
              "Destination": "Jalgaon",
              "Date": "2024-08-08T15:31:02.136Z",
              "Price": "533"
            },
            {
              "ID": "Furman48",
              "BUS_Number": "589-835-0113 x41711",
              "Begininig": "Kohlapur",
              "Destination": "Shirdi",
              "Date": "2024-08-26T15:42:59.898Z",
              "Price": "865"
            },
            {
              "ID": "Edwin.Nitzsche",
              "BUS_Number": "880-626-6733 x701",
              "Begininig": "Kochburgh",
              "Destination": "South Maybell",
              "Date": "2024-06-12T15:02:56.995Z",
              "Price": "877 "
            },
            {
              "ID": "Jerald_Kautzer",
              "BUS_Number": "1-849-129-6694",
              "Begininig": "KohlaPur",
              "Destination": "Nagpur",
              "Date": "2024-06-26T10:06:02.847Z",
              "Price": "707"
            },
            {
              "ID": "Maryam48",
              "BUS_Number": "1-959-714-5714 x3514",
              "Begininig": "Nagpur",
              "Destination": "Jalgaon",
              "Date": "2025-02-03T16:27:43.388Z",
              "Price": "771"
            },
            {
              "ID": "Cydney98",
              "BUS_Number": "(775) 810-7654 x7641",
              "Begininig": "Mumbai",
              "Destination": "Jalagon",
              "Date": "2024-10-21T04:48:56.640Z",
              "Price": "630"
            },
            {
              "ID": "Jesus.Abbott50",
              "BUS_Number": "240-528-1597",
              "Begininig": "Mumbai",
              "Destination": "Akhola",
              "Date": "2025-04-29T12:02:40.334Z",
              "Price": "704"
            },
            {
              "ID": "Tracey7",
              "BUS_Number": "890.912.5716",
              "Begininig": "mumbai",
              "Destination": "Jalgaon",
              "Date": "2025-01-15T14:01:43.254Z",
              "Price": "739"
            },
            {
              "ID": "Andre_DuBuque",
              "BUS_Number": "526-215-9758 x7991",
              "Begininig": "Haridhwar",
              "Destination": "Delhi",
              "Date": "2024-09-19T11:39:10.268Z",
              "Price": "979"
            },
            {
              "ID": "Darrick8",
              "BUS_Number": "1-673-430-7711",
              "Begininig": "Mumbai",
              "Destination": "Goa",
              "Date": "2024-09-04T15:24:36.076Z",
              "Price": "523"
            },
            {
              "ID": "Hester15",
              "BUS_Number": "447.215.1938 x13632",
              "Begininig": "Delhi",
              "Destination": "Mumbai",
              "Date": "2025-04-26T14:52:25.851Z",
              "Price": "900"
            }
    ]
    const [Begi, setBegi] = useState('');
    const [Desi, setDesi] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [filteredBuses, setFilteredBuses] = useState([]);
    const [isavailable,setisavailable]=useState(false)
   const [ShowBus,setShowBus]=useState('')
    const [showpop,setshowpop] =useState(false)
    const [selectedBus, setSelectedBus] = useState(null);
    const [hide,sethide]=useState()
    const navi =useNavigate()
    
    // Define the done function
    const done = () => {
     const hide =  document.querySelector('.selection')
        if(!Begi || !Desi){
            alert('Enter the Begining And destination')
        
        }
        const matchingBuses = allBus.filter(
          bus => bus.Begininig.toLowerCase() === Begi.toLowerCase() &&
                 bus.Destination.toLowerCase() === Desi.toLowerCase()
      );
  
      if (matchingBuses.length === 0) {
        setisavailable(true)  
        setFilteredBuses([]);  
          return;
      }
        else{
          setisavailable(false)
        hide.style.display='none'
        setIsVisible(!isVisible);
        console.log("Beginning: " + Begi + ", Destination: " + Desi);
        setShowBus(!isVisible)
    }
    };

    const show = (bus) => {
        setSelectedBus(bus);
        setshowpop(true);
        setShowBus(false);
      };

      const final = ()=>{
        sethide(true)
        setTimeout(() => {
            navi('./Select',{state:{ bus: selectedBus }})
            sethide(false)
        }, 3000);
      }
    
    return (
       <div>
            <Navba />
            <h2 id='abo' className='text-center mx-2 my-2 bg-warning rounded-3 fs-4 fw-semibold text-capitalize'>
                Book Your Ticket
            </h2>
            <h4 className='text-center text-uppercase text-secondary selection'>Select  <br/> Beginig & Destination</h4>
            <div className= {`main-content d-md-flex justify-content-center text-center${showpop ? 'blurred' : ''}`} id='main'>
                <label className='text-start m-3 h4 fw-semibold text-success' htmlFor="Location">
                    Beginning
                </label>
                <br />
                <input
                    list='Cars'
                    type="text"
                    value={Begi}
                    onChange={(e) => setBegi(e.target.value)}
                    id='Location'
                    placeholder='Location'
                />
                <br /><br />
                <datalist id="Cars">
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Kolhapur">Kolhapur</option>
                    <option value="Nashik">Nashik</option>
                </datalist>
                {/*  */}
                <label htmlFor="Destination" className='m-3 h4 fw-semibold text-success text-end'>
                    Destination
                </label>
                <br />
                <input
                    list='Des'
                    value={Desi}
                    onChange={(e) => setDesi(e.target.value)}
                    type="text"
                    id="Destination"
                    placeholder='Destination'
                />
                <datalist id='Des'>
                    <option value="Jalgaon">Jalgaon</option>
                    <option value="Solapur">Solapur</option>
                    <option value="Satara">Satara</option>
                    <option value="Nagpur">Nagpur</option>
                </datalist>
                <br />
            </div>

            <div className= {`main-content d-flex justify-content-center mt-5 ${showpop ? 'blurred' : ''}`}>
                <button
                    onClick={done} className='fw-semibold text-uppercase bg-primary text-warning p-1'
                    type="button">
                    Submit
                </button>
            </div>

            <div id='this' className={`main-content ${showpop ? 'blurred' : ''}`}>
                {isVisible && <h2 className='text-center text-dark fs-3 '>{Begi} →→→→→→→→ {Desi}</h2>}
            </div>

          {isavailable && (
          <h2> No buses available for the selected route</h2>
          )}
          
            {showpop && selectedBus && (
  <div className='text-center popup-wrapper'>
    <div className="popup">
      <h4 className='text-center'>Bus Details</h4>
      <h5>ID: {selectedBus.ID}</h5>
      <h4>BUS_Number: {selectedBus.BUS_Number}</h4>
      <div className='d-flex justify-content-center'>
        <h4>From: {selectedBus.Begininig}</h4>
        <span style={{ margin: '0 10px' }}>→→→</span>
        <h4>To: {selectedBus.Destination}</h4>
      </div>
      <h4>Date: {selectedBus.Date}</h4>
      <h4>Price: ₹{selectedBus.Price}</h4>

      <button
        onClick={() => {
          setshowpop(false); setShowBus(true); }}
        className='btn btn-outline-dark text-uppercase fw-semibold'
        style={{ boxShadow: '16px 10px 6px black' }}> Close & Back  </button>

      <br /><br />
      <button className='btn btn-outline-success' onClick={final}>Submit</button>
    </div>
  </div>
)}

{/*  */}
{hide &&
<div className="spinner">
  <div></div>   
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
</div>}
{/*  */}
            <div  className={`main-content ${showpop ? 'blurred' : ''}`}><br />
              
                <h3 className='text-center mt-4'>Bus Data</h3>
                { ShowBus &&
<table className='table table-striped '>
  <thead>
    <tr>
      <th>ID</th>
      <th>Bus Number</th>
      <th>Departure From</th>
      <th>Arrival To</th>
      <th>Date</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {allBus
      .filter(bus => 
        bus.Begininig.toLowerCase().includes(Begi.toLowerCase()) && 
        bus.Destination.toLowerCase().includes(Desi.toLowerCase())
      )
      .map((bus, index) => (
        <tr key={index}>
          <td>{bus.ID}</td>
          <td>{bus.BUS_Number}</td>
          <td>{bus.Begininig}</td>
          <td>{bus.Destination}</td>
          <td>{bus.Date}</td>
          <td>{bus.Price}</td>
          <td>
            <button onClick={() => show(bus)} className='btn btn-primary'>
              Select
            </button>
          </td>
        </tr>
      ))}
  </tbody>
</table>}

            </div> 
             
           
            <Fotter/>
        </div>
    );
}
