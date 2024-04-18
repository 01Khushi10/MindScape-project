import React, { useMemo, useState } from 'react'
import Home from '../Pages/Home'
import Topbar from '../components/common/Topbar'
import { getCurrentUser } from '../api/FirestoreAPI'

function HomeLayout() {
  let [currentUser, setCurrentUser] = useState({})
  useMemo(()=>{
    getCurrentUser(setCurrentUser)
  })
  return (
    <div className='w-[100%] bg-[#E4E4E4] min-h-[100vh]'>
        <Topbar/>
        <Home currentUser={currentUser} />
    </div>
  )
}

export default HomeLayout