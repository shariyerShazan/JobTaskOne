"use client"
import React from 'react'
import Sidebar from '../../../components/adminComponents/Sidebar'

const Layout = ({children}) => {
  return (
    <>
        <div className='flex '>
            <Sidebar />
        </div>
          {children}
    </>
  )
}

export default Layout
