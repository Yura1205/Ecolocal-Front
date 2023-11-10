import React from 'react'
import bandeja from '../assets/bandeja.jpg'
import { DashboardNav } from '../components/DashboardNav'

const stylesInfo = {
  infoMain: {
    marginTop: "10vh",
    maxWidth: "100wh",
  },
}

export const Info = () => {
  return (
    <>
      <DashboardNav />
      <div className="infoMain" style={stylesInfo.infoMain}>
        <div>Info</div>
      </div>
    </>
  )
}
