// En tu archivo ProfilePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // Obtener el token almacenado en LocalStorage
        const token = localStorage.getItem('token');

        // Verificar si el token está presente
        if (!token) {
          // Si no hay token, redirigir a la página de inicio de sesión u otra página
          navigate('/Login');
          return;
        }

        // Hacer una solicitud para obtener la información del perfil del usuario
        const response = await axios.get('http://89.116.25.43:4291/api/usuarios/profile', {
          // Incluir el token en el encabezado de autorización
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Actualizar el estado con los datos del usuario
        setUserData(response.data.result);
      } catch (error) {
        console.error('Error al obtener la información del perfil:', error);

        // Manejar el error según sea necesario
      }
    };

    // Llamar a la función para obtener datos del perfil cuando el componente se monta
    fetchProfileData();
  }, [navigate]); // Agregar navigate como dependencia para evitar advertencias de linting

  return (
    <div>
      <h1>Perfil del Usuario</h1>
      {userData ? (
        <div>
          <p>Nombre: {userData.nombres}</p>
          <p>Apellidos: {userData.apellidos}</p>
          <p>Email: {userData.email}</p>
          {/* Agrega más campos según sea necesario */}
        </div>
      ) : (
        <p>Cargando datos del perfil...</p>
      )}
    </div>
  );
};

export default ProfilePage;
