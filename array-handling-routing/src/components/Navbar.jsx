import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
      

      <ul className='flex items-center justify-center gap-10 p-10 m-10 text-white  text-xl bg-black'>
        <li>
          <Link  to="/">
          Home 
          </Link>
        </li>

        <li><Link  to="/about">
          About
          </Link></li>
          <li> <Link  to="/contents">
          Contents
          </Link></li>
          <li> <Link  to="/products">
          Products
          </Link></li>
      </ul>
    </div>
  )
}

export default Navbar