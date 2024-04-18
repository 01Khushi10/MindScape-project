import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterAPI, GoogleSignInAPI } from '../api/AuthAPI';
import { toast } from 'react-toastify';
import { postUserData } from '../api/FirestoreAPI';


function RegisterComponent() {
    let navigate = useNavigate();
    const register = async () => {
      try{
        let res = await RegisterAPI(credentials.email, credentials.password);
        toast.success("Account registered successfully");
        postUserData({name:credentials.name, email:credentials.email})
        localStorage.setItem('userEmail',res.user.email)
        navigate("/home");
      }
      catch (error) {
        toast.error("Cannot create account");
      }
  
    }
    const [credentials, setCredentials] = useState({});
    return (
      <div className='wrapper w-full h-[100vh]'>
        <div className=' flex flex-col justify-center items-center h-[100vh]'>
          <div className=' font-semibold text-[2rem] '>Welcome to MindScape</div>
          <div className=' text-[#A9A9A9]'>A place for sharing your innermost musings, ideas, and reflections.</div>
          <input
        onChange={(event)=> setCredentials({...credentials, name: event.target.value})}
        className='common-input w-[300px] height-[50px] cursor-pointer text-red-500 px-3 py-1 outline outline-slate-400 rounded-sm  focus:outline-[#0B6FC8] mt-5 text-lg'
        type="text"
        placeholder='Enter your name' />
          <input
        onChange={(event)=> setCredentials({...credentials, email: event.target.value})}
        className='common-input w-[300px] height-[50px] cursor-pointer text-red-500 px-3 py-1 outline outline-slate-400 rounded-sm  focus:outline-[#0B6FC8] mt-5 text-lg'
        type="email"
        placeholder='Your email' />
        <input 
        className='common-input w-[300px] height-[50px] cursor-pointer text-red-500 px-3 py-1 outline outline-slate-400 rounded-sm  focus:outline-[#0B6FC8] mt-5 text-lg'
        onChange={(event)=> setCredentials({...credentials, password: event.target.value})}
        type="password" 
        placeholder='Password (6 or more characters)' />
        <button
        onClick={register} 
        className='select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-8'>Agree and Join</button>
        <div className=' flex items-center justify-center mt-3 gap-2'>
          <hr className='w-[140px]' /> 
          <p className=' text-sm text-[#dadada]'>OR</p>
          <hr className='w-[140px]' /> 
        </div>
        <div className=' mt-3 flex justify-center items-center gap-3'>
          <p>Already on Linkedin?</p>
          <p onClick={()=> navigate("/")} className=' text-red-500 cursor-pointer'>Sign in</p>
        </div>
  
        </div>
       
      </div>
    )
  }

export default RegisterComponent