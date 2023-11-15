import React, { useState, useEffect } from 'react';
import profilePic from '../assets/profilePic.jpg';
import Button from "react-bootstrap/esm/Button";
import { MdDelete } from 'react-icons/md';
import { BiSolidSave } from 'react-icons/bi';
import {usuarioAutenticado} from './InfoUsers2';
import Swal from "sweetalert2";



export const DashboardSidebar = () => {
  const usuarioA =  usuarioAutenticado.nombres;//localStorage.getItem('username');
  const [defaultPicture, setDefaultPicture] = useState(profilePic);
  const [selectedPicture, setSelectedPicture] = useState(null);

  useEffect(() => {
    // Cargar imagen por defecto al montar el componente
    setDefaultPicture(profilePic);
  }, []);

  const handlePictureChange = (event) => {
    // Reemplazar la imagen por defecto con la nueva imagen cargada
    const newPicture = event.target.files[0];
    setDefaultPicture(URL.createObjectURL(newPicture));
    setSelectedPicture(newPicture);
  };

  const handleDeletePicture = () => {
    // Restaurar la imagen por defecto al eliminar la imagen del usuario
    setDefaultPicture(profilePic);
    setSelectedPicture(null);
  };

  const handleSavePictures = () => {
    // Guardar o procesar la imagen seleccionada en la base de datos o API
    if (selectedPicture) {
      console.log(selectedPicture);
      // Aquí puedes enviar la imagen al servidor o realizar otras acciones necesarias
    }
  };

  return (
    <>
      <div className='Sidebar'>
        <img
          className="PfPic"
          src={selectedPicture ? URL.createObjectURL(selectedPicture) : defaultPicture}
          alt="pfPic"
        />
        <div className='buttonsImg'>
          <label className="file-input-label">
            <input className="InputImg" type="file" onChange={handlePictureChange} />
            Cambiar foto de perfil
          </label>
          <div className='flex'>
            {selectedPicture && (
              <div>
                <Button variant="danger" className="w-10 m-1"
                  onClick={handleDeletePicture}>
                  <MdDelete />
                </Button>
              </div>
            )}
            {selectedPicture && (
              <Button variant="primary" className="w-10 m-1 mb-2 "
                onClick={()=>{handleSavePictures,Swal.fire("Información!", " Se ha guardado tu foto de perfil")}}>
                  
                <BiSolidSave />
              </Button>
            )}
          </div>
        </div>
        <div className='textSidebar'>
          {usuarioAutenticado.nombres}
          <p>Bienvenid@!</p>
        </div>
      </div>
    </>
  );
};

