import React, { useContext } from 'react'
import UserContext from '../context/Usercontext'

function Profile() {
const {username} =useContext(UserContext)
if(!username){
    return <div>Please login</div>
}
  return (
    <div>Welcome{username.user}</div>
  )
}

export default Profile