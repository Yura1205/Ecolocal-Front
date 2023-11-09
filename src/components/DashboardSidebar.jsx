import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import  {BsFillCartFill}  from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
export const DashboardSidebar = () => {
  return (
    <div className='Sidebar'>
      <ul className='lista'>
        <li className='elm_lista '>
          <NavLink to="/Dashboard" className='flex items-center justify-start' activeClassName="active"><FaHome/>Home</NavLink> 
        </li>
        <li className='elm_lista'>
          <NavLink to="/Products" className='flex items-center justify-start' activeClassName="active"><BsFillCartFill/>Products</NavLink> 
        </li>
        <li className='elm_lista'>
          <NavLink to="/Profiles" className='flex items-center justify-start'activeClassName="active"><AiOutlineUser/>Profile</NavLink> 
        </li>
        <li className='elm_lista'>
          <NavLink to="/Settings" className='flex items-center justify-start'activeClassName="active"><FiSettings/>Settings</NavLink> 
        </li>
      </ul>
    </div>
  )
}
