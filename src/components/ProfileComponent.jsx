import React from 'react'
import ProfileCard from './common/ProfileCard'
import ProfileEdit from '../components/common/ProfileEdit'
import { useState } from 'react';

function ProfileComponent({currentUser}) {
  const [isEdit, setIsEdit] = useState(false);
  const onEdit = () => {
    setIsEdit(!isEdit);
  }
  return (
    <div >
        {isEdit ? <ProfileEdit currentUser={currentUser} onEdit={onEdit}/> 
        : 
        <ProfileCard currentUser={currentUser} onEdit={onEdit}/>}
    </div>
  )
}

export default ProfileComponent