import React, { useState, useMemo } from 'react'
import PostsCard from './PostsCard';
import { postStatus, getStatus } from '../../api/FirestoreAPI';
import { GoPencil } from "react-icons/go";
import { useLocation } from 'react-router-dom';
import { getSingleUser } from '../../api/FirestoreAPI';
import { getSingleStatus } from '../../api/FirestoreAPI';



function ProfileCard({currentUser, onEdit}) {
  let location = useLocation();
  const [allStatuses, setAllStatuses] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});
  useMemo(() => {
    if (location?.state?.id) {
      getSingleStatus(setAllStatuses, location?.state?.id);
    }

    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location?.state?.email);
    }
  }, []);
  useMemo(()=>{
    getStatus(setAllStatuses);
  },[])

  return (
    
    <>
      <div className=' w-auto min-h-[20vh] bg-white m-5 rounded-md flex justify-between'>
        
        <div className='p-5 flex justify-around w-[100%]'>
          <div>
            <p className=' font-[600] text-xl text-slate-700 mb-3'>
              {Object.values(currentProfile).length === 0
                ? currentUser.name
                : currentProfile?.name}
            </p> 
            <p className=' font-[500] text-slate-500 text-xs'>
            {Object.values(currentProfile).length === 0
                ? currentUser.email
                : currentProfile?.email}
            </p>
            <p className=' font-[400] text-[#575757] leading-[1.3] text-[1rem] w-[60%]'>{Object.values(currentProfile).length === 0
                ? currentUser.headline
                : currentProfile?.headline}</p>
            <p className=' w-[80%] font-[500] text-lg text-[#575757] '>
            {Object.values(currentProfile).length === 0
                ? currentUser.about
                : currentProfile?.about}  
            </p>
            <p className=' font-[500] text-lg text-[#737373] '>Interests: 
            {Object.values(currentProfile).length === 0
                ? currentUser.interests
                : currentProfile?.interests}
            </p>
            
          </div>
          <div className=''>
            <p className=' font-[400] text-lg text-[#575757] '>
            {Object.values(currentProfile).length === 0
                ? currentUser.location
                : currentProfile?.location}
            </p>
          </div>
        </div>
        <div className=' absolute right-[3rem] top-[5rem]'>
          <button onClick={onEdit}><GoPencil size={20} /></button>
        </div>
        <div>
        
      </div>
      </div>
      {allStatuses.filter((item) => {
        return item.userEmail === localStorage.getItem("userEmail")
      })
      .map((posts) => {
        return (
          <div key={posts.id}>
            <PostsCard posts={posts} />
          </div>
        );
      })}
      
    </>
  )
}

export default ProfileCard