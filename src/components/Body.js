import React from 'react'
import Sidebar from '../components/Sidebar'
// import MainContainer from '../components/MainContainer'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className='flex w-full h-[90%]'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body