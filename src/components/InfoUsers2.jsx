import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import { MdDelete } from 'react-icons/md'
import { FaUserEdit } from 'react-icons/fa'
import ModalUsers from "./ModalUsers";
import Constantes from "../utils/Constantes";
import { useNavigate } from "react-router-dom";

const usuarioAutenticado = /*data.find((user) => user.usuario === selected.usuario);*/{
  nombres: 'Yura',
  apellidos: 'Torres',
  email: "yura12@gmail.com",
  usuario: "yura12",
  
}

const InfoUsers2 = () => {

  const navigate = useNavigate();
  
  const meLargo = () => {
    navigate('/Login');
  }

  const endPoint = Constantes.URL_SERVICIO + "/usuarios/listar";
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const MySwal = withReactContent(Swal);

  const [selected, setSelected] = useState({});

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (elemento) => {
    setShow(true)
    setSelected(elemento);
  };
  const local = () => {}

  const handleUsers = async () => {
    await axios
      .get(endPoint, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        setData(resp.data.usuarios);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400 || err.response.status === 401) {
          //Swal.fire("Información!", err.response.data.message, "error");
        } else {
          //Swal.fire("Información!", "Ocurrió un error!", "error");
        }
      });
  };

  useEffect(() => {
    handleUsers();
  }, []);

  const handleDelete = (element) => {
    MySwal.fire({
      title: `¿Está seguro de Eliminar a ${element.usuario}? Esta acción es irreversible!`,
      showCancelButton: true,
      confirmButtonText: "Sí",
    }).then(async (result) => {
      if (result.isConfirmed) {
        navigate('/Login');
        // Acción en caso de que elijan el Sí 
        /*await axios
          .delete(`${Constantes.URL_SERVICIO}/usuarios/eliminar/${element._id}`, {
            headers: { Authorization: `bearer ${token}` },
          })
          .then((resp) => {
            Swal.fire("Información!", resp.data.message, "success");
            handleUsers();
          })
          .catch((err) => {
            console.log(err);
            if (err.response.status === 400 || err.response.status === 401) {
              Swal.fire("Información!", err.response.data.message, "error");
            } else {
              Swal.fire("Información!", "Ocurrió un error!", "error");
            }
          });*/

      }
    });
  };

  // Filtrar la lista para mostrar solo el usuario autenticado
    

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Email</th>
            <th>Usuario</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarioAutenticado && (
            <tr>
              <td>1</td>
              <td>{usuarioAutenticado.nombres}</td>
              <td>{usuarioAutenticado.apellidos}</td>
              <td>{usuarioAutenticado.email}</td>
              <td>{usuarioAutenticado.usuario}</td>
              <td>
                <Button variant="primary" className="w-10 mr-1" onClick={() => handleShow(usuarioAutenticado)}>
                  <FaUserEdit />
                </Button>
                <Button variant="danger" className="w-10" onClick={() => handleDelete(usuarioAutenticado)}>
                  <MdDelete />
                </Button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <ModalUsers show={show} handleClose={handleClose} user={selected} getUser={handleUsers} />
    </>
  );
};
export default InfoUsers2;