import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import './Navba.css';
import { useState } from 'react';

export default function Navba() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (path) => (e) => {
    e.preventDefault(); 
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
      navigate(path);
    }, 3000); 
  };

  return (
    <div>
      <h1 className='text-center bg-danger text-uppercase p-2'>
        MH &nbsp;&nbsp;&nbsp;B U S &nbsp;&nbsp;B O O K I N G 🚌🚍
      </h1>

      {loader && (
        <div className='text-center'>
           <div className="three-body ">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <Navbar data-bs-theme="light" className='justify-content-center'>
        <Navbar.Brand>
          <img id='imgg' className='img-fluid'
            src="src/assets/realistic-bus-vector-illustration-concept_1253202-12473.png"
            alt=""
            style={{ height: '20vh' }}
          />
        </Navbar.Brand>

        <Nav className="h4">
          <a className='nav-link' onClick={handleLinkClick('/')}>Home</a>
          <a className='nav-link' onClick={handleLinkClick('/About')}>AboutUs</a>
          <a className='nav-link' onClick={handleLinkClick('/ticket')}>Ticket</a>
          <a className='nav-link' onClick={handleLinkClick('/contact')}>ContactUs</a>
        </Nav>
      </Navbar>
    </div>
  );
}
