import React from 'react'
import { useParams } from 'react-router-dom'
function UserId() {
    const {userid}=useParams()
  return (
    <div className=' bg-gray-600 text-white text-3xl p-6 text-center font-bold'>UserId : {userid}</div>
  )
}

export default UserId