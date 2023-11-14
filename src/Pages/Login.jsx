import React, { useEffect } from 'react'
import { FormLogin } from '../components/FormLogin'
import '../styles/login.css'

const Login = () => {
  return (
    <>
        <div className="main">
        <FormLogin /> 
        </div>
    </>
  )
}

export default Login