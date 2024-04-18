import React, { useMemo, useState } from 'react'
import { getCurrentUser } from '../api/FirestoreAPI';
import Topbar from '../components/common/Topbar';
import Profile from '../Pages/Profile'

function ProfileLayout() {
    const [currentUser, setCurrentUser] = useState({});
    useMemo(()=>{
        getCurrentUser(setCurrentUser);
    },[])
  return (
    <div className='w-[100%] bg-[#E4E4E4] min-h-[100vh]'>
        <Topbar currentUser={currentUser}/>
        <Profile currentUser={currentUser}/>
    </div>
  )
}

export default ProfileLayout;