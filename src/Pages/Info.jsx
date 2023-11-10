import React from 'react'
import bandeja from '../assets/bandeja.jpg'
import { DashboardNav } from '../components/DashboardNav'
import temp1 from '../assets/temp1.jpg'
import temp2 from '../assets/temp2.jpg'

const stylesInfo = {
  infoMain: {
    marginTop: "10vh",
    maxWidth: "100wh",
  },
  imgInfo: {
    marginTop: "2vh",
    marginLeft: "2vw",
  },
  tittles: {
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
    marginTop: "2vh",
    alignItems: "center",
    justifyContent: "center",
    padding: "6% 5% 5% 5%",
    textAlign: "justify",
    fontSize: "1.5rem",
  },
  infoContent2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "Center",
  },
 
}


export const Info = () => {
  
  return (
    <>
      <DashboardNav />
      <div className="infoMain" style={stylesInfo.infoMain}>
        <h1 className='tittle1' style={stylesInfo.tittles}>Bandeja Paisa</h1>
        <div className='infoContent' style={stylesInfo.infoContent}>
          <div className='imgInfo' style={stylesInfo.imgInfo}>
            <img src={bandeja} alt='bandeja' />
          </div>
          <div className='infoText' style={stylesInfo.infoText}>
            <p>La bandeja paisa es un plato típico de la gastronomía colombiana, originario de la región andina, específicamente de los departamentos de Antioquia y Caldas,​ y de la región paisa de Colombia, aunque su consumo se ha extendido a otras regiones del país.​</p>
          </div>
        </div>
        <h3 style={stylesInfo.tittles}>Disponible en:</h3>

        <div className='infoContent2' style={stylesInfo.infoContent2}>
          <img src={temp1} alt='temp1' />
          <img src={temp2} alt='temp2' />
        </div>
      </div>
      </>
      )
}
