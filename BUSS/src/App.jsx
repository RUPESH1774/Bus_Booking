
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import About from './About'
import Ticket from './Ticket'
import Contact from './Contact'
import Fotter from './Fotter'
import Select from './Select';
import Login from './Login';
import Register from './Register';
export default function App() {
  return (
    <div> 
    <BrowserRouter>
    <Routes>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/register' element={<Register/>}></Route> 
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/ticket' element={<Ticket/>}></Route>
    <Route path ='/ticket/Select' element={<Select/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/fotter' element={<Fotter/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
