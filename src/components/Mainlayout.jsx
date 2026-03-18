import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Navber from './Navber'

const Mainlayout = () => {
  return (
    <> 
    {/* <Navber /> */}
    <Header />
    <Outlet />
    </>
  )
}

export default Mainlayout