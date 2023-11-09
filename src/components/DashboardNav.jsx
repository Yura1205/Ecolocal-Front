import React from 'react'
import Logo from '../assets/logo.png'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'

export const DashboardNav = () => {
  return (
    <>
    <header>
        <img className="logo" src={Logo}/>
        <nav className="navigation">
            <NavLink to= "/Dashboard">Home</NavLink>
            <NavLink to="/Products">Products</NavLink>
            <NavLink to="/Restaurants">Restaurants</NavLink>
            <NavLink to="/Profiles">Profile</NavLink>
        </nav>
    </header>
    </>
  ) 
}
