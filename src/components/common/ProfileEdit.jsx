import React, { useState } from 'react'
import { editProfile } from '../../api/FirestoreAPI';
import { IoChevronBackCircleOutline } from "react-icons/io5";

function ProfileEdit({onEdit, currentUser}) {
  const [editInputs, setEditInputs] = useState(currentUser);
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };
    const updateProfileData = async () => {
        await editProfile(currentUser?.id, editInputs);
        await onEdit();
    }
  return (
    <div className='w-auto min-h-[50vh] bg-white m-5 rounded-md p-5'>
        <div className=' flex flex-col items-end' >
          <button onClick={onEdit}><IoChevronBackCircleOutline size={30} /></button>
        </div>
        <div className=' grid gap-5 w-[100%]'>
            <input onChange={getInput} className='common-input height-[50px] cursor-pointer text-red-500 px-3 py-1 outline outline-slate-400 rounded-sm  focus:outline-[#0B6FC8] mt-5 text-lg' type="text" placeholder='Name' name='name'/>
            <input onChange={getInput} className='common-input height-[50px] cursor-pointer text-red-500 px-3 py-1 outline outline-slate-400 rounded-sm  focus:outline-[#0B6FC8] mt-5 text-lg'  type="text" placeholder='Headline' name='headline'/>
            <input onChange={getInput} className='common-input height-[50px] cursor-pointer text-red-500 px-3 py-1 outline outline-slate-400 rounded-sm  focus:outline-[#0B6FC8] mt-5 text-lg'  type="text" placeholder='About' name='about'/>
            <input onChange={getInput} className='common-input height-[50px] cursor-pointer text-red-500 px-3 py-1 outline outline-slate-400 rounded-sm  focus:outline-[#0B6FC8] mt-5 text-lg'  type="text" placeholder='Interests' name='interests'/>
            <input onChange={getInput} className='common-input height-[50px] cursor-pointer text-red-500 px-3 py-1 outline outline-slate-400 rounded-sm  focus:outline-[#0B6FC8] mt-5 text-lg'  type="text" placeholder='Location' name='location'/>
        </div>
        <div className=' flex justify-center items-center'>
        <button onClick={updateProfileData} className='select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-8'>Save</button>
        </div>
        
    </div>
  )
}

export default ProfileEdit