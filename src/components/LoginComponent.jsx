import React, { useState } from 'react'
import { LoginAPI, RegisterAPI, GoogleSignInAPI } from '../api/AuthAPI'
import Login from '../Pages/Login';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function LoginComponent() {
  let navigate = useNavigate();
  const login = async () => {
    try{
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success("Signed in successfully");
      localStorage.setItem('userEmail',res.user.email)
      navigate("/home");
    }
    catch (error) {
      toast.error("Please check your credentials");
    }

  }
  const [credentials, setCredentials] = useState({});
  return (
    <div className='wrapper w-full h-[100vh]'>
      <div className=' flex flex-col justify-center items-center h-[100vh]'>
        <div className=' font-semibold text-[2rem] '>Login to MindScape</div>

        <input
      onChange={(event)=> setCredentials({...credentials, email: event.target.value})}
      className='common-input w-[300px] height-[50px] cursor-pointer text-red-500 px-3 py-1 outline outline-slate-400 rounded-sm  focus:outline-[#0B6FC8] mt-5 text-lg'
      type="email"
      placeholder='Enter your email' />
      <input 
      className='common-input w-[300px] height-[50px] cursor-pointer text-red-500 px-3 py-1 outline outline-slate-400 rounded-sm  focus:outline-[#0B6FC8] mt-5 text-lg'
      onChange={(event)=> setCredentials({...credentials, password: event.target.value})}
      type="password" 
      placeholder='Password' />
      <button
      onClick={login} 
      className='select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-8'>Log in to MindScape</button>
      <div className=' flex items-center justify-center mt-3 gap-2'>
        <hr className='w-[140px]' /> 
        <p className=' text-sm text-[#dadada]'>OR</p>
        <hr className='w-[140px]' /> 
      </div>
      <div className=' mt-3 flex justify-center items-center gap-3'>
        <p>New to MindScape?</p>
        <p onClick={()=> navigate("/register")} className=' text-red-500 cursor-pointer'>Sign in now</p>
      </div>

      </div>
     
    </div>
  )
}

export default LoginComponent