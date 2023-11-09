import React from 'react'
import Tucan from '../assets/toucan.png'
import '../styles/signup.css'
import { SignInButton } from './SignInButton'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from "sweetalert2";
import Constantes from '../utils/Constantes'


export const SignUpForm = () => {

    const endPoint = Constantes.URL_SERVICIO + '/registrar';

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const RegistroUsuario = async(e) => {
      e.preventDefault();
      console.log("Nombre: ", nombres);
      console.log("Apellido: ", apellidos);
      console.log("Email: ", email);   
      console.log("Usuario: ", usuario);
      console.log("Password: ", password);
  
      const formData = {
        nombres: nombres,
        apellidos: apellidos,
        email: email,  
        usuario: usuario,
        password: password
      }
      
      //Consumo de servicio Login
      await axios.post(endPoint, formData)
      .then((response) => {
        console.log(response);
        Swal.fire("Registro Exitoso!", "Bienvenido!", "success");
        navigate('/Login');
    
      })
      .catch(error => {
        console.log(error);
        if(error.response.status === 400){
            Swal.fire("Registro Fallido!", error.response.data.message, "error");
        }else{
            Swal.fire("Registro Fallido!", "Ocurrió un error!", "error");
        }
      })
    }
  
    return (
      <div className="card_main_snup">
        <div className="card_form_snup">
            <h4>Welcome to our site! Let us get to know you!</h4>
         
            <div className="input_nombre">
                <label className="labels">Name</label>
                <input className="inputs_snup" type="text" placeholder="Name"
                onChange={(e) => {setNombres(e.target.value)}}
            />
            </div>

            <div className="input_apellido">
                <label className="labels">Lastname</label>
                <input className="inputs_snup" type="text" placeholder="Lastname"
                onChange={(e) => {setApellidos(e.target.value)}}
            />
            </div>

            <div className="input_email">
                <label className="labels">Email</label>
                <input className="inputs_snup" type="text" placeholder="Email@example.com"
                onChange={(e) => {setEmail(e.target.value)}}
            />
            </div>

            <div className="input_user">
                <label className="labels">Username</label>
                <input className="inputs_snup" type="text" placeholder="Username" 
                onChange={(e) => {setUsuario(e.target.value)}}
                />
            </div>

          <div className="input_password">
            <label className="labels">Password</label>
            <input className="inputs_snup" type="password" placeholder="Password" 
            onChange={(e) => {setPassword(e.target.value)}}
            />
            </div>

            
          <form>
            <div className="sgnBtn">
              <SignInButton fnRegistroUsuario={RegistroUsuario}/>
            </div>
          </form>
  
        </div>
        <div className="photo">
          <img src={Tucan} />
        </div>
      </div>
    )
}
