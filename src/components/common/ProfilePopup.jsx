import { useNavigate } from "react-router-dom";
import React, { useMemo, useState } from "react";
import { getCurrentUser } from '../../api/FirestoreAPI';
import { onLogout } from '../../api/AuthAPI'

function ProfilePopup() {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div className=' h-auto w-auto p-3  flex justify-center flex-col items-center gap-3 bg-white text-slate-600 absolute top-[8%] right-[10%] border border-slate-500'>
      <button className=" border-2 border-red-500 px-3 py-1 rounded-full text-red-500 hover:bg-red-500 hover:text-white" onClick={()=>navigate("/profile")}>View Profile</button>
      <button className=" border-2 border-red-500 px-3 py-1 rounded-full text-red-500 hover:bg-red-500 hover:text-white" onClick={onLogout}>Logout</button>
    </div>
  )
}

export default ProfilePopup