import React from 'react'
import { useState, useMemo } from 'react'
import { Button, Modal } from 'antd';
import ModalComponent from './ModalComponent';
import { postStatus, getStatus } from '../../api/FirestoreAPI';
import PostsCard from './PostsCard';
import {getcurrentTimeStamp} from '../../helpers/useMoment'
import { getUniqueID } from '../../helpers/getUniqueID';


function PostStatus({currentUser}) {  
    let userEmail = localStorage.getItem("userEmail");
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState('');
    const [allStatuses, setAllStatuses] = useState([])
    const sendStatus = async () => {
      let object = {
        status: status,
        timeStamp: getcurrentTimeStamp('LLL'),
        userEmail:userEmail,
        userName: currentUser.name,
        postID: getUniqueID()
      }
        await postStatus(object)
        await setOpen(false);
        await setStatus("")
    }
    useMemo(()=>{
      getStatus(setAllStatuses);
    },[])
  return (
    <div className=' flex flex-col justify-center items-center'>
        <div className=' w-[60%] mt-8 h-[7.7rem] border border-[#cbc7c7] rounded-md bg-white flex  mx-auto justify-center items-center'>
            <button onClick={()=>{setOpen(true)}} className=' w-[80%] bg-white hover:bg-[#eae9e9] border border-[#959191] h-12 cursor-pointer px-4 text-lg font-[400] text-[#6c6c6c] text-left rounded-full'>Start a Post</button>
            <ModalComponent setStatus={setStatus} open={open} setOpen={setOpen} status={status} sendStatus={sendStatus}/>
        </div>
        <div>
        {allStatuses.map((posts) => {
          return (
            <div key={posts.id}>
              <PostsCard posts={posts}/>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default PostStatus