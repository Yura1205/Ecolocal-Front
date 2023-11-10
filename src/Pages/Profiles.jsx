import React from 'react'
import { DashboardSidebar } from '../components/DashboardSidebar'
import { DashboardNav } from '../components/DashboardNav'

import '../styles/profiles.css'
export const Profiles = () => {
  return (
    <>
      <DashboardNav />
      <div className='profiles_main'>
        <DashboardSidebar />
      </div>

    </>

  )
}
