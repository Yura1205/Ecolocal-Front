import React, { useEffect, useState } from "react";
import axios from 'axios'
import Swal from "sweetalert2";
import "../styles/listproducts.css";

const ListProducts = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const getProducts = async () => {
    await axios
      .get("http://89.116.25.43:3500/api/productos/listar", {
        headers: { Authorization: `bearer ${token}`, },
      })
      .then((resp) => {
        console.log(resp);
        setData(resp.data.result);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else if (err.response.status == 401) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else {
          Swal.fire("Información!", "Ocurrio un error!", "error");
        }
      });
  };

  useEffect(() => {
    getProducts();
  },[]);


  return (
    <>
      <div className='main-grid'>
          {data.map((result) => {
            return (
              <div className='celdas'
                key={result._id}>

                <div className='fotos'>
                  <img className='img-product'
                    src={result.imagen}
                    alt={result.descripcion}/>
                </div>

                <div className='valores'>
                  {"$" + result.valor }
                </div>
                
                <div className='descripciones'>
                  {result.descripcion}
                </div>
              </div>
            );
          })}
      </div>
</>
);
}
export  default ListProducts;