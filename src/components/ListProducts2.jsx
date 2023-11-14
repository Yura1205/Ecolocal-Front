import React from 'react';
import '../styles/listproducts2.css';
import { Grid, Card, CardContent, CardMedia, Typography} from '@mui/material';
import mazamorra from '../assets/Mazamorra.jpg'
import bandeja from '../assets/bandeja.jpg'
import sancocho from '../assets/sancocho-colombiano.jpg'
import frijolesp from '../assets/frijolesp.jpg'; 
import frijoles from '../assets/frijoles.jpg'; 
import mondongo from '../assets/mondongo.jpg'; 
import morcilla from '../assets/morcilla.jpg'; 
import chorizo from '../assets/chorizo.jpg'; 
import calentao from '../assets/calentao.jpg';
import arepap from '../assets/arepap.jpg'; 
import arepac from '../assets/arepac.jpg'; 
import arepamp from '../assets/arepamp.jpg'; 
import { useNavigate } from 'react-router-dom'
import { ButtonCardsP } from './ButtonCardsP';

const products = await fetch('http://127.0.0.1:5000/api/products')

const ProductsData = [
    {
        name: 'Bandeja Paisa',
        description: '',
        image: bandeja,
    },
    {
        name: 'Mazamorra Paisa',
        description: '',
        image: mazamorra,
    },
    {
        name: 'Fríjoles antioqueños',
        description: '',
        image: frijoles,
    },
    {
        name: 'Fríjoles con pezuña de cerdo',
        description: '',
        image: frijolesp,
    },
    {
        name: 'Sancocho Antioqueño',
        description: '',
        image: sancocho,
    },
    {
        name: 'Sopa de Mondongo Antioqueño',
        description: '',
        image: mondongo,
    },
    {
        name: 'Morcilla antioqueña',
        description: '',
        image: morcilla,
    },
    {
        name: 'Chorizo antioqueño',
        description: '',
        image: chorizo,
    },
    {
        name: 'Calentao Paisa',
        description: '',
        image: calentao,
    },
    {
        name: 'Arepa Paisa',
        description: '',
        image: arepap,
    },
    {
        name: 'Arepa de Maíz Pelao',
        description: '',
        image: arepamp,
    },
    {
        name: 'Arepa de Choclo',
        description: '',
        image: arepac,
    },
];

const getProducts = async () => {
    await axios
      .get("http://127.0.0.1:5000/api/products", {
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

const ListProducts2 = () => {

    const rowsp = [];
    const itemsPerRowp = 4;
    const navigate = useNavigate();

    for (let i = 0; i < ProductsData.length; i += itemsPerRowp) {
        const rowItemsp = ProductsData.slice(i, i + itemsPerRowp);
        rowsp.push(rowItemsp);
    }

    const SaberMas = () => {
        navigate('/Info');
    };
    

    return (
        <>
            
            {rowsp.map((row, rowIndex) => (
                <section key={rowIndex} className='section2p'>
                    <Grid container spacing={1} justifyContent="center">
                        {row.map((service, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card className='cardp'>
                                    <CardMedia className='CardMedia'
                                        component="img"
                                        alt={service.name}
                                        height="220px" 
                                        image={service.image}
                                    />
                                    <CardContent className='CardContent' >
                                        <Typography variant="h5" component="div">
                                            {service.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {service.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </section>
            ))}
        </>
    );
};


export default ListProducts2;
