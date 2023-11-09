import React from 'react'
import { DashboardHeader } from '../components/DashboardHeader'
import { DashboardNav } from '../components/DashboardNav'
import ListUsers from '../components/ListUsers'
import Cards1 from '../components/Cards1'
import Cards2 from '../components/Cards2'
import Cards3 from '../components/Cards3'
import { DashboardSidebar } from '../components/DashboardSidebar'
import Carrusel from '../components/Carrusel'


export const Dashboard = () => {

  return (
    <>
      <header>
        <DashboardNav />
      </header>
        <div className='products_main'>
          <div className='menu flex'>
            <div className='w-screen-h-screen'>
              <Carrusel />
              <div className='flex_cards'>
                <Cards1 />
                <Cards2 />
                <Cards3 />
              </div>
            </div>
          </div>
        </div>
    </>

  )
}
