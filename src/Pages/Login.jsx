import React, { useEffect } from 'react'
import { FormLogin } from '../components/FormLogin'
import '../styles/login.css'

const Login = () => {

  /*const [Gender, setGender] = React.useState('')

  const changeData = (e) => {
    console.log("El valor mostrado es: ",e.target.value)
    setGender(e.target.value)
  }

  useEffect(() => {
    console.log("Cargado!",Gender)
  })*/

  return (
    <>
        <div className="main">
        <FormLogin /> 
        </div>
    </>
  )
}

export default Login