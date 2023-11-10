import React from 'react'
import profilePic from '../assets/profilePic.jpg'

export const DashboardSidebar = () => {
  const usuarioA = localStorage.getItem('username')

  return (
    <>
      <div className='Sidebar'>
        <img className ="PfPic"  src={profilePic} alt = "pfPic"/> 
        {usuarioA}    
      </div>

    </>
  )
}
