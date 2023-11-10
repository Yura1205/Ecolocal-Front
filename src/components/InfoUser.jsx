// En tu componente de la página de perfil
import React, { useEffect } from 'react';

const InfoUser = () => {
    useEffect(() => {
        // Recuperar datos del usuario almacenados en localStorage
        const token = localStorage.getItem('token');
        const usuario = JSON.parse(localStorage.getItem('usuario'));

        // Aquí puedes usar el token para hacer solicitudes autenticadas al backend
        // También puedes usar los datos del usuario para mostrar en la página de perfil
        console.log('Token:', token);
        console.log('Datos del Usuario:', usuario);
    }, []);

    return (
        <div>
            {/* Contenido de la página de perfil */}
        </div>
    );
}

export default InfoUser;
