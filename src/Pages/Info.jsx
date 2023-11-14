import React from 'react'
import bandeja from '../assets/bandeja.jpg'
import { DashboardNav } from '../components/DashboardNav'
import temp1 from '../assets/temp1.jpg'
import temp2 from '../assets/temp2.jpg'
import '../styles/info.css'

export const Info = () => {
  
  return (
    <>
      <DashboardNav />
      <div className="infoMain" >
        <h1 className='tittles'>Bandeja Paisa</h1>
        <div className='infoContent' >
          <div className='imgInfo' >
            <img src={bandeja} alt='bandeja' />
          </div>
          <div className='infoText'>
            <p>La bandeja paisa es un plato típico de la gastronomía colombiana, originario de la región andina, específicamente de los departamentos de Antioquia y Caldas,​ y de la región paisa de Colombia, aunque su consumo se ha extendido a otras regiones del país.​</p>
          </div>
        </div>
        <h3 className='tittles'>Disponible en:</h3>

        <div className='infoContent2' >
          <img src={temp1} alt='temp1' />
          <img src={temp2} alt='temp2' />
        </div>
      </div>
      </>
      )
}
