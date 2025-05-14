
import './Fotter.css';
import { useNavigate } from 'react-router-dom';

export default function Fotter() {
  const navigate = useNavigate();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className='background border border-3 border-success mt-4'>
      <div className='d-md-flex justify-content-evenly ms-4'>
        <h2 style={{ textShadow: '25px 14px 5px black' }} className='text-warning text-uppercase text-center'>
          Mh Bus Booking <br />
          <img className='img-fluid' style={{ height: '8vh' }} src="src/assets/Fotter.png" alt="image" />
        </h2>

        <div className='ms-5'>
          <h2 id='menu' className='text-light text-center ms-2'>Menu</h2>
          <div className='d-flex flex-column align-content-center'>
            <a className='nav-links' onClick={(e) => handleLinkClick(e, '/')}>Home</a>
            <a className='nav-links' onClick={(e) => handleLinkClick(e, '/About')}>AboutUs</a>
            <a className='nav-links' onClick={(e) => handleLinkClick(e, '/ticket')}>Ticket</a>
            <a className='nav-links' onClick={(e) => handleLinkClick(e, '/contact')}>ContactUs</a>
          </div>
        </div>

        <div className="ms-5 text-center">
          <label className="my-2 form-label text-light fs-3">Email</label>
          <input
            type="email"
            className="form-control rounded-3 my-2"
            style={{ boxShadow: '10px 17px 12px black' }}
            placeholder="abc@mail.com"
          />
          <button style={{ boxShadow: '10px 10px 20px' }} className='my-3 ms-3 text-danger text-uppercase bg-dark'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
