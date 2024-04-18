import React, { useState } from 'react'
import HomeComponent from '../components/HomeComponent'
import { useEffect } from 'react'
import { onAuthStateChanged} from "firebase/auth"
import {auth} from '../FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/common/Loader'

function Home({currentUser}) {
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
  return loading? <Loader/>:<HomeComponent currentUser={currentUser}/>
}

export default Home