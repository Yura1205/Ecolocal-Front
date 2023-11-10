import React from 'react'
import bandeja from '../assets/bandeja.jpg'
import { DashboardNav } from '../components/DashboardNav'

const stylesInfo = {
  infoMain: {
    marginTop: "10vh",
    maxWidth: "100wh",
  },
  imgInfo: {
    marginTop: "5vh",
    marginLeft: "2vw",
  },
  tittle1: {
    textAlign: "center",

  },
  infoContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    display: "box",
    height: "50%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    padding: "6% 5% 5% 5%",
    
  },
}

export const Info = () => {
  return (
    <>
      <DashboardNav />
      <div className="infoMain" style={stylesInfo.infoMain}>
        <h1 className='tittle1' style={stylesInfo.tittle1}>Bandeja Paisa</h1>
        <div className='infoContent' style={stylesInfo.infoContent}>
          <div className='imgInfo' style={stylesInfo.imgInfo}>
            <img src={bandeja} alt='bandeja' />
          </div>
          <div className='infoText' style={stylesInfo.infoText}>
          <p>La bandeja paisa es un plato típico de la gastronomía colombiana, originario de la región andina, específicamente de los departamentos de Antioquia y Caldas,​ y de la región paisa de Colombia, aunque su consumo se ha extendido a otras regiones del país.​</p>
          </div>
        </div>
      </div>
    </>
  )
}
