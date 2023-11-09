import React from 'react'

export const LoginButton = ({fnInicioSesion}) => {
  return (
    <button className="btn btn-success" onClick={fnInicioSesion}>Login</button>
  )
}

