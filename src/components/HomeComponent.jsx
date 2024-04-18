import React from 'react'
import PostStatus from './common/PostStatus'

function HomeComponent({currentUser}) {
  return (
    <PostStatus currentUser={currentUser}/>
    
  )
}

export default HomeComponent