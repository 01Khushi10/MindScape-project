import React, { useState } from 'react'
import mindScape from "../../assets/mindScape.png"
import { MdHome } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import ProfilePopup from './ProfilePopup';

function Topbar() {
    const [popupVisible, setPopupVisible] = useState(false);
    let navigate = useNavigate();
    const gotoRoute = (route) => {
        navigate(route);
    }
    const displayPopup = () => {
      setPopupVisible(!popupVisible);
    };
  return (

    <div>
      {popupVisible ? (
        <div className="popup-position">
          <ProfilePopup />
        </div>
      ) : (
        <></>
      )}
      <div className=' w-[100vw] mx-auto flex justify-center items-center bg-white'>
      <div className=' w-[80%] h-[3.3rem] bg-white flex items-center justify-between'>
        <div className='flex items-center w-[30%] gap-10 '>
        <img className=' w-[2.2rem] cursor-pointer' src={mindScape} alt="Linkedin Logo" />
        <MdHome onClick={()=> gotoRoute('/home')} size={30} color='#7F807F' className=' cursor-pointer sm:visibility-hidden hover:fill-red-500' />
        </div>
        <div className=' flex justify-end w-[10%] '>
        <FaRegCircleUser onClick={displayPopup} size={25} color='#7F807F' className=' cursor-pointer hover:fill-red-500' />
        </div> 
      </div>   
    </div>
    </div>
  )
}

export default Topbar