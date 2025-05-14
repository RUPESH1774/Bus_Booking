import Navba from './Navba';
import Fotter from './Fotter';
import './App.css'
let About=()=> {
  return (
    
    <div> 
   <Navba/>
      <h3 id='abo' className='text-center  text-uppercase text-danger bg-black mx-5'> About US</h3> 
    <div className="allimage d-lg-flex justify-content-evenly text-center my-4">
      <img className='img-fluid my-4' style={{height:'28vh',width:'50vh',border:'2px solid black',boxShadow:'10px 11px 10px ',borderRadius:'30px 1px'}} src="https://th.bing.com/th/id/OIP.4fgdz20rRYK2khv4lMY_GAHaDa?rs=1&pid=ImgDetMain" alt="" />
      <img className='img-fluid my-4'style={{height:'28vh',border:'2px solid black',boxShadow:'10px 11px 10px ',borderRadius:'30px 1px'}} src="https://s3-ap-southeast-1.amazonaws.com/rbplus/BusImage/Domestic/16884_1400_3.png" alt="" />
      <img className='img-fluid my-4'style={{height:'28vh',border:'2px solid black',boxShadow:'10px 11px 10px ',borderRadius:'30px 1px'}} src="https://th.bing.com/th/id/OIP.Z8RVgDRJKDoTIm3gMDYMCQHaEK?pid=ImgDet&w=474&h=266&rs=1" alt="" />
      </div><br />

      <div className='d-md-flex justify-content-between ms-5 me-5'>
  <div className='text-center'>
    <h3 className='text-uppercase bg-info rounded-3 heading_para'> MH BUS Booking</h3>
  </div>
  <div className='para'  style={{ maxWidth: '700px'}}>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus, alias eligendi ratione maxime,
      unde commodi ut harum autem rerum sequi facilis in nulla corrupti molestiae earum aliquid amet saepe!
    </p>
    <p>
      Voluptate, impedit excepturi cum repudiandae mollitia quae nihil quo quibusdam saepe quia suscipit voluptatibus,
      doloremque eveniet ex fugiat distinctio.
    </p>
    <p>
      Voluptate, impedit excepturi cum repudiandae mollitia quae nihil quo quibusdam saepe quia suscipit voluptatibus,
      doloremque eveniet ex fugiat distinctio.
    </p> <p>
      Voluptate, impedit excepturi cum repudiandae mollitia quae nihil quo quibusdam saepe quia suscipit voluptatibus,
      doloremque eveniet ex fugiat distinctio.
    </p>
   
  </div>
</div> 
<br /><br />

    <div className="background1 mt-4 text-light">
  <div className='hidies'>
   <h5>MH Booking Bus</h5>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eveniet non cum. Ipsam, nobis ad. Incidunt minima dicta laboriosam magni vitae iusto quaerat, dolorum eum ducimus sequi, quas quod hic quis mollitia porro expedita? Ratione aperiam veniam soluta ipsam, ad quos reprehenderit odit magnam, tenetur vero ducimus harum nesciunt dignissimos.</p> 
    </div>
    </div><br />
  <Fotter/>
    </div>

  )
}
export default About;
