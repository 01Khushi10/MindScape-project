import React from 'react'
import ProfileComponent from '../components/ProfileComponent'
import { useEffect, useState } from 'react'
import { onAuthStateChanged} from "firebase/auth"
import {auth} from '../FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/common/Loader'

function Profile({currentUser}) {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth,(res) => {
      if(!res?.accessToken){
        navigate("/");
      }
      else{
        setLoading(false);
      }
    })
  },[])
  return loading? <Loader/>:<ProfileComponent currentUser={currentUser}/>
}

export default Profile