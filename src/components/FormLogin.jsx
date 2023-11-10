import React from 'react'
import Logo from '../assets/logo.png'
import Card1 from '../assets/card1.png'
import '../styles/login.css'
import { LoginButton }   from '../components/LoginButton.jsx'
import { SignInButton2 } from './SignInButton2'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Constantes from '../utils/Constantes'

export const FormLogin = () => {
  const endPoint = Constantes.URL_SERVICIO + "/usuarios/login";

  const[usuario, setUsuario] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate();

  const InicioSesion = async(e) => {
    e.preventDefault();
    console.log("Usuario: ", usuario);
    console.log("Password: ", password);

    const data = {
      usuario: usuario,
      password: password
    }
    
    //Consumo de servicio Login
    await axios.post(endPoint, data)
    .then(response => {
      console.log(response);
    localStorage.setItem('token', response.data.jwt);
    console.log(    localStorage.setItem('token', response.data.jwt)
    )
    localStorage.setItem('usuario', response.data.user);
    
    navigate('/Dashboard');
    })
    .catch(error => {
      console.log(error);
    })
  }

  const SignInNavigate = () => {
    navigate('/SignUp');
  }

  

  return (
    <div className="card_main">
      <div className="card_form">
        <h4>Artificial Intelligence giving you travel recommendations</h4>
        <h5>Welcome back! Please login to your account.</h5>
        <div className="input_user">
          <label className="labels">Username</label>
          <input className="inputs" type="text" placeholder="Username" 
          onChange={(e) => {setUsuario(e.target.value)}}
          />

        </div>
        <div className="input_password">
          <label className="labels">Password</label>
          <input className="inputs" type="password" placeholder="Password" 
          onChange={(e) => {setPassword(e.target.value)}}
          />

        </div>
        <div className="option">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <form>
          <div className="lgnBtn">
            <LoginButton fnInicioSesion={InicioSesion}/>
            <SignInButton2 fnSignInNavigate={SignInNavigate}/>
          </div>
        </form>

      </div>
      <div className="photo">
        <img src={Card1} />
      </div>
    </div>
  )
}