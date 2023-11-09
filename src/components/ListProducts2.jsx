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

const ProductsData = [
    {
        name: 'Bandeja Paisa',
        description: 'Es un abundante plato colombiano que combina arroz, frijoles, carne molida, chorizo, huevo frito, chicharrón, aguacate y plátano maduro, ofreciendo una variedad de sabores y texturas.',
        image: bandeja,
    },
    {
        name: 'Mazamorra Paisa',
        description: 'Es un postre colombiano a base de maíz, leche y panela, con un toque de canela y una textura espesa y dulce.',
        image: mazamorra,
    },
    {
        name: 'Fríjoles antioqueños',
        description: 'Son un platillo típico de Antioquia, Colombia, preparados con frijoles cocidos en hogao (una salsa de tomate y cebolla) y acompañados de arroz, carne y plátano maduro frito.',
        image: frijoles,
    },
    {
        name: 'Fríjoles con pezuña de cerdo',
        description: 'Son un plato antioqueño que consiste en frijoles cocidos con una pezuña de cerdo, lo que le otorga un sabor y una textura únicos a los frijoles, creando un platillo sabroso y tradicional.',
        image: frijolesp,
    },
    {
        name: 'Sancocho Antioqueño',
        description: 'Es una sopa tradicional de Antioquia, Colombia, que se prepara con una variedad de carnes (pollo, cerdo, carne de res), yuca, plátano, papa, mazorca y condimentos, creando un caldo abundante y sabroso.',
        image: sancocho,
    },
    {
        name: 'Sopa de Mondongo Antioqueño',
        description: 'Es un plato tradicional colombiano preparado con mondongo (tripas de res o cerdo), papa, yuca, plátano, maíz y sazonado con hierbas y especias, resultando en una sopa sabrosa y reconfortante.',
        image: mondongo,
    },
    {
        name: 'Morcilla antioqueña',
        description: 'Es un embutido que se prepara con sangre de cerdo, arroz, cebolla, especias y otros ingredientes, relleno en una tripa natural o artificial, con un sabor característico.',
        image: morcilla,
    },
    {
        name: 'Chorizo antioqueño',
        description: 'Es una variedad de chorizo colombiano elaborado con carne de cerdo picada, condimentos y especias, conocido por su sabor distintivo y es común en la gastronomía colombiana.',
        image: chorizo,
    },
    {
        name: 'Calentao Paisa',
        description: 'Es un plato típico colombiano que aprovecha las sobras del desayuno tradicional colombiano, como arroz, frijoles, carne y arepa, que se recalientan juntos para crear un plato sabroso y reconfortante.',
        image: calentao,
    },
    {
        name: 'Arepa Paisa',
        description: 'Es un tipo de arepa colombiana, conocida por su tamaño más grande y su espesor. Se prepara a base de masa de maíz y se cocina en una plancha o sartén hasta que esté dorada por fuera y tierna por dentro.',
        image: arepap,
    },
    {
        name: 'Arepa de Maíz Pelao',
        description: 'Es una variante de la arepa colombiana hecha con masa de maíz pelado, que le da una textura y sabor únicos',
        image: arepamp,
    },
    {
        name: 'Arepa de Choclo',
        description: 'Es una arepa colombiana elaborada con masa de choclo o maíz tierno, lo que le otorga un sabor dulce y una textura más suave en comparación con las arepas de masa de maíz tradicionales.',
        image: arepac,
    },
];

const stylesProducts = {
  container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "0px",
      maxWidth: "100wh",
      margin: "0 auto",
  },
  sectionp: {
      padding: "8rem  0 0 0",
      marginBottom: "0rem",
      textAlign: "center",
  },
  section2p: {
    padding: "1rem  0 0 0",
    marginBottom: "0rem",
    textAlign: "center",
},
  cardp: {
      width: "290px",
      margin: "1rem",
  },
  media: {
      height: "260px", 
  },
  CardMedia: {
    height: "220px"
  },
  CardContent: {
    height: "250px"
  },
  buttonCardsP: {
    height: "50px",
    width: "100px",
    backgroundColor: "#FFC300",
  },
};


const ListProducts2 = () => {
    const rowsp = [];
    const itemsPerRowp = 4;

    for (let i = 0; i < ProductsData.length; i += itemsPerRowp) {
        const rowItemsp = ProductsData.slice(i, i + itemsPerRowp);
        rowsp.push(rowItemsp);
    }

    return (
        <>
            
            {rowsp.map((row, rowIndex) => (
                <section key={rowIndex} style={stylesProducts.section2p}>
                    <Grid container spacing={1} justifyContent="center">
                        {row.map((service, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card style={stylesProducts.cardp}>
                                    <CardMedia style={stylesProducts.CardMedia}
                                        component="img"
                                        alt={service.name}
                                        height="220px" 
                                        image={service.image}
                                    />
                                    <CardContent style={stylesProducts.CardContent}>
                                        <Typography variant="h5" component="div">
                                            {service.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {service.description}
                                        </Typography>
                                        <button className="buttonCardsP">Agregar al carrito</button>  
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
