import React from 'react'
import { DashboardHeader } from '../components/DashboardHeader'
import { DashboardSidebar } from '../components/DashboardSidebar'
import { DashboardNav } from '../components/DashboardNav'
import ListUsers from '../components/ListUsers'
import '../styles/profiles.css'
export const Profiles = () => {
  return (
    <>
      <DashboardNav />
      <div className='products_main'>
        <div className='flex'>
          <div className='w-screen-h-screen'>
            <ListUsers />
          </div>
        </div>
      </div>
  
    </>

  )
}
