import { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './Firebase'

export default function Login() {
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [Loginsuccessfully,setloginsuccessfully]=useState(false)
  const [nologin,setnologin]=useState(false)
    const [showpop,setshowpop] =useState(false)

const navi =useNavigate()
    const sumbit = async (e) => {
      e.preventDefault();
    
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setloginsuccessfully(true);
        setshowpop(true);
    
        setTimeout(() => {
          setshowpop(false);
        }, 3000);
        navi('/')

      } catch (error) {
        setnologin(true);
        setshowpop(true);
    
        setTimeout(() => {
          setshowpop(false);
        }, 3000);
      }
    };
    
  return (
    <div>
        <main>

        <div className='container1'>
        <h2>Login</h2>
        <br /><br />
        <form action="" onSubmit={sumbit} className={`main-content ${showpop ? 'blurred' : ''}`}>
        <label htmlFor="">Email</label><br />
        <input type="email" name='email' id='email' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='enter your Email' /><br /><br />
        
        <label htmlFor="">Password</label><br />
        <input type="password" name="password" id="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='enter your password' /><br /><br />
      
       <Link className='link'> forgot password ?</Link><br />
      
        <button className='btn btn-outline-success m-2'>Login</button>

        <p>Don't have Account <Link className='link ' to='/register'>Create Account</Link> </p>
        
        </form>
        </div>
        {Loginsuccessfully && showpop && (
  <div className="">
    <h2 className='text-success'>Login Successful ✅</h2>
  </div>
)}

{nologin && showpop && (
  <div className=" ">
    <h2 className='text-danger '>Wrong email or password ❌</h2>
  </div>)}
        
        </main>
    </div>
  )
}
