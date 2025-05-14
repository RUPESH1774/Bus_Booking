import Navba from './Navba'
import Fotter from './Fotter'
import './Contact.css'
export default function Contact() {
  return (
    <div>
        <Navba/>
        <h2 id='abo' className='text-center text-primary bg-dark mx-5 border-primary rounded-3 p-2'>Contact_US</h2>
      <br /> <br />


       <div className="containerr">
      <form action="">
        <label htmlFor="Name">Name</label><br /><br />
        <input type="text" name="Name" id="Name" placeholder='Enter Your Name' /><br />
        <label htmlFor="Email">Email</label><br /><br />
        <input type="email" name="Email" id="Email" placeholder='Enter your mail' /><br />
        <label htmlFor="Number">Phone Number</label><br /><br />
        <input type="number" name="Number" id="Number" placeholder='Enter Your number'/><br />
        <label htmlFor="Message">Message</label><br /><br />
        <textarea name="Message" id="Message" placeholder='Message'></textarea><br /><br />
          <button className=''>Sumbit</button>
        </form>

        <div className='headoffice'>
        <h2>Head Office</h2>
        <p>Lorem ipsum dolor sit <br />amet consectetur 
          adipisicing elit. <br /> Neque, dolores.</p>
       </div>

      

        <div className=' contact'>
        <div>
        <img className='img-fluid' style={{height:'10vh',}} src="data:image/jpeg;base64,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" alt="" />
        <p className='fs-5 fw-semilight '>yourbusbooking <br />@yahoo.com</p>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div>
        <img className='img-fluid' style={{height:'10vh'}} src="https://static.vecteezy.com/system/resources/previews/020/317/451/original/telephone-call-icon-logo-vector.jpg" alt="" />
        <p className='fs-5'>98+ 2201830123</p>
       </div>
        </div>
       </div><br />
<div className=' map'>
       <img className='img-fluid text-end' src="https://www.shutterstock.com/image-vector/simplified-stylized-world-map-small-260nw-1580908684.jpg" alt="" />
       </div>
            <Fotter/>
        </div>
  )
}
