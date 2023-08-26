import React from 'react'
import { Outlet, Link } from "react-router-dom"


const Home = () => {
  return (
    <div className='flex flex-row'>
      <div className='sidebar  text-lg w-1/6 '>
        <Link to="/">
          <div className='p-2 border-2 border-slate-300  font-bold cursor-pointer ease-out duration-200 bg-neutral-800
            text-white hover:bg-neutral-900'>
            Contact
          </div>
        </Link>

        <Link to="/charts">
          <div className='p-2 border-2 border-slate-300  font-bold  cursor-pointer  ease-out duration-200 bg-neutral-800
            text-white hover:bg-neutral-900'>
            Charts and Maps
          </div>
        </Link>

      </div>
      <div className='flex-1 bg-zinc-500 border-2 border-slate-300  '>
        <Outlet />
      </div>
    </div>
  )
}

export default Home
