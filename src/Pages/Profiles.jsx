import React from 'react'
import { DashboardSidebar } from '../components/DashboardSidebar'
import { DashboardNav } from '../components/DashboardNav'

import '../styles/profiles.css'
import InfoUser from '../components/InfoUser'
export const Profiles = () => {
  return (
    <>
      <DashboardNav />
      <div className='profiles_main'>
        <DashboardSidebar />
        <InfoUser/>
      </div>

    </>

  )
}
