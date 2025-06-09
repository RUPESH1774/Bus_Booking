import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import './Navba.css';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase';
import { useAuth } from './useAuth'; // custom hook

export default function Navba() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const user = useAuth();

  const handleLinkClick = (path) => (e) => {
    e.preventDefault();
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
      navigate(path);
    }, 3000);
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div>
      <h1 className='text-center bg-danger text-uppercase p-2'>
        MH &nbsp;&nbsp;&nbsp;B U S &nbsp;&nbsp;B O O K I N G 🚌🚍
      </h1>

      {loader && (
        <div className='text-center'>
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div className='d-flex justify-content-end gap-2 lr'>
        {user ? (
          <button className='btn btn-outline-danger' onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link className='btn btn-outline-primary' to='/login'>Login</Link>
            <Link className='btn btn-outline-success' to='/register'>Register</Link>
          </>
        )}
      </div>

      <Navbar data-bs-theme="light" className='justify-content-center small'>
        <Navbar.Brand>
          <img id='imgg' className='img-fluid'
            src="https://toppng.com/uploads/preview/free-vector-red-travel-bus-clip-art-tour-bus-clip-art-11563268096q6j27gz51v.png"
            alt=""
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
