import React from 'react'
import { DashboardSidebar } from '../components/DashboardSidebar'
import { DashboardNav } from '../components/DashboardNav'
import '../styles/profiles.css'
import InfoUsers2 from '../components/InfoUsers2'

export const Profiles = () => {
  return (
    <>
      <DashboardNav />
      <div className='profiles_main'>
        <DashboardSidebar />
        <InfoUser2/>
      </div>

    </>

  )
}
