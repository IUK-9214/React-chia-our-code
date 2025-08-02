import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {

    const data=useLoaderData()
    //         const [data,setData]=useState({})
    // useEffect(()=>{
    //      fetch('https://api.github.com/users/IUK-9214')
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data))
    //    console.log(data)
    // },[])
  return (
    <>
    <div className='bg-gray-700 text-3xl text-white m-4 p-4'>
        <h1 className='text-center'>Follower : { data.followers}</h1>
        <img 
        className='w-100 rounded-3xl'
        src={data.avatar_url} alt="pic of user" />
    </div>
    
  </>
  
)
}

export default Github

export const githubloader=async()=>{
    const response =await fetch('https://api.github.com/users/IUK-9214')
    return response.json()
}