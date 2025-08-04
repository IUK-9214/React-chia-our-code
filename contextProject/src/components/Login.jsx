import React, { useContext, useState } from 'react'
import UserContext from '../context/Usercontext'

function Login() {
  const [user,SetUser]=useState('')
  const[pass,SetPass]=useState('')
  const{setUsername}=useContext(UserContext)
  const handlesubmit=(e)=>{
e.preventDefault()
setUsername({user,pass})
  }
  
    return (

    <div>
        <h1>LOGIN PAGE </h1>
        <input type="text"
        value={user}
        placeholder='NAME'
        onChange={(e)=>{
            SetUser(e.target.value)
        }} />
        <input type="Password"
        placeholder='PASSWORD'
        value={pass}
        onChange={(e)=>{
            SetPass(e.target.value)
        }}
        />
        <button type='submit'
        onClick={handlesubmit}
        >
            Submit
        </button>
    </div>
  )
}

export default Login