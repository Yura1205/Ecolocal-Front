import React from 'react'
import ListProducts from '../components/ListProducts'
import { DashboardHeader } from '../components/DashboardHeader'
import { DashboardNav } from '../components/DashboardNav'
import ListProducts2 from '../components/ListProducts2'
export const Products = () => {
  return (
    <>
    <DashboardNav/>
    <div className='products_main'>
    <ListProducts2 />
     
    </div>
    </>

  )
}
