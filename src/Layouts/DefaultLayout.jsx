import React from 'react'
import Navbar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default DefaultLayout