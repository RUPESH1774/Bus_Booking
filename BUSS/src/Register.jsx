import { useState } from 'react'
import './Register.css'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from './Firebase'
export default function Register() {
  const [name,setname]=useState()
  const [email,setemail]=useState()
  const [number,setNumber]=useState()
  const [password,setpaswword]=useState()
  const [isregister,setisregister]=useState(false)
  const[notregister,setnotrgister]=useState(false)
  const [showpop,setshowpop]=useState(false)
  const register = async (e) => {
    e.preventDefault();
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Update the user's display name
      await updateProfile(user, {
        displayName: name
      });
  
      setisregister(true);
      setshowpop(true);
  
      setTimeout(() => {
        setisregister(false);
        setshowpop(false);
      }, 3000);
  
    } catch (error) {
      console.error(error);
      setnotrgister(true);
      setshowpop(true);
  
      setTimeout(() => {
        setnotrgister(false);
        setshowpop(false);
      }, 3000);
    }
  };
  return (
    <div>
        <div className='main1'>
    <div className='my'>
        <h2>Register</h2>
        <form action="" onSubmit={register}>
        <label htmlFor="">Enter your Name</label><br />
        <input type="text" name="Name" id="Name" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter your Name" /><br /><br />
        <label htmlFor="">Email</label><br />
        <input type="email" name="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="enter your email"/><br /><br />
        <label htmlFor="">Number</label><br />
        <input type="number" name="Number" id="number" value={number} onChange={(e)=>setNumber(e.target.value)} placeholder="enter your number" /><br /><br />
        <label htmlFor=""> Enter Password</label><br />
        <input type="password" name="password" id="password" value={password} onChange={(e)=>setpaswword(e.target.value)} placeholder="Enter your password"/><br /><br />
        <button className='btn btn-outline-success p-2 mt-2'>Create</button>
        </form>
        </div>
        {isregister && showpop &&(
        <div>
          <h2 className='text-success'> Registration Successfully ✅</h2>
        </div>
        )}

{notregister && showpop &&(
        <div>
          <h2 className='text-danger'> somthing Error Try Again ❌</h2>
        </div>
        )}
        </div>

        </div>
  )
}
