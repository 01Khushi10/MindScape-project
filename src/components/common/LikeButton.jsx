import React, { useMemo, useState } from 'react'
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { getLikesByUser, likePost } from '../../api/FirestoreAPI'

function LikeButton({userID, postID}) {
  const [likesCount, setLikesCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    likePost(userID, postID,liked)
  }
  useMemo(()=>{
    getLikesByUser(userID,postID,setLiked, setLikesCount)
  },[userID, postID])
  return (
    <div className=' cursor-pointer mt-4 flex  flex-col '>
      <div className=' flex gap-2 text-xs font-mono'>
      <p>{likesCount}</p>
      <p>People liked this post</p>
      </div><div className=' flex gap-1'>
      {liked? <FcLike onClick={handleLike} size={25} className=' cursor-pointer' />: <FcLikePlaceholder size={25} className=' cursor-pointer' onClick={handleLike} />}
      <p>{liked?'Liked':'Like'}</p>
      </div>
      
    </div>
  )
}

export default LikeButton