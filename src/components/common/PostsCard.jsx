import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../../api/FirestoreAPI'
import LikeButton from './LikeButton'




function PostsCard({posts}) {
  const [currentUser, setCurrentUser] = useState({})
  useMemo(()=>{
    getCurrentUser(setCurrentUser)
  },[])
  let navigate = useNavigate()
  return (
    <div className='w-[60vw] mt-8 min-h-[7.7rem] border border-[#cbc7c7] rounded-md bg-white flex  mx-auto px-5 mb-8 py-3 flex-col'>
        <div className=' flex justify-between'>
          <div>
            <p onClick={()=>navigate('/profile',{
              state: { id:posts?.userID, email: posts.userEmail},
            })} className=' font-[600] underline text-blue-800 cursor-pointer text-sm'>{posts.userName}</p>
            <p className=' text-xs font-[400] text-[#cbcaca]'>{posts.timeStamp}</p>
          </div>
        </div>
        <p className=' text-left font-[400] text-md mt-3'>{posts.status}</p>
        <LikeButton userID={currentUser?.id} currentUser={currentUser} postID={posts.id}/>
    </div>
  )
}

export default PostsCard