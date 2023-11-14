import React from 'react'
import{ Grid, Card, CardContent, CardMedia, Typography} from '@mui/material';
import Restaurant1 from '../assets/Restaurant1.png'; 
import Restaurant2 from '../assets/Restaurant2.jpg'; 
import Restaurant3 from '../assets/Restaurant3.jpg';
import Restaurant4 from '../assets/Restaurant4.jpg'; 
import Restaurant5 from '../assets/Restaurant5.jpg'; 
import Restaurant6 from '../assets/Restaurant6.jpg'; 
import Restaurant7 from '../assets/Restaurant7.jpg'; 
import Restaurant8 from '../assets/Restaurant8.jpg'; 
import Restaurant9 from '../assets/Restaurant9.jpg';
import Restaurant10 from '../assets/Restaurant10.jpg'; 
import Restaurant11 from '../assets/Restaurant11.jpg'; 
import Restaurant12 from '../assets/Restaurant12.jpg'; 
import '../styles/restaurants.css';
const RestaurantsData = [
    {
        name: 'C&K',
        description: 'amplia variedad de opciones gourmet, desde carnes a la parrilla hasta sushi fresco',
        image: Restaurant1,
    },
    {
        name: 'The Gourmet Shake',
        description: 'Cocina mediterránea con una amplia variedad de opciones vegetarianas y veganas',
        image: Restaurant2,
    },
    {
        name: 'La Duquesa',
        description: 'Carnes argentinas a la parrilla con chimichurri casero.',
        image: Restaurant3,
    },
    {
        name: 'Cheese N Pasta',
        description: 'comida tradicional napolitana, con pastas y mozzarella elaboradas artesanalmente',
        image: Restaurant4,
    },
    {
        name: 'Cafe de la Peru',
        description: 'Comida peruana auténtica con ceviche y pisco sours',
        image: Restaurant5,
    },
    {
        name: 'El Buen Paisa',
        description: ' Comida colombiana auténtica con arepas y aguardiente',
        image: Restaurant6,
    },
    {
        name: 'Sabor y Vida',
        description: ' Mariscos frescos y deliciosos en un ambiente relajado',
        image: Restaurant7,
    },
    {
        name: 'Cuatro Veganos',
        description: 'Comida vegetariana saludable y deliciosa',
        image: Restaurant8,
    },
    {
        name: 'Oasis',
        description: 'Cocina francesa moderna con toques locales',
        image: Restaurant9,
    },
    {
        name: 'Delicias Criollas',
        description: 'Carnes a la parrilla con guarniciones caseras.',
        image: Restaurant10,
    },
    {
        name: 'El Rincón Verde',
        description: 'Hamburguesas gourmet con opciones vegetarianas y veganas, además de cervezas artesanales',
        image: Restaurant11,
    },
    {
        name: 'Fusión y Tradición',
        description: 'Comida rápida europea con sabores auténticos y frescos',
        image: Restaurant12,
    },
];
export const ListRestaurants = () => {
    const rows = [];
    const itemsPerRow = 4;

    for (let i = 0; i < RestaurantsData.length; i += itemsPerRow) {
        const rowItems = RestaurantsData.slice(i, i + itemsPerRow);
        rows.push(rowItems);
    }
  return (
    <>
    {rows.map((row, rowIndex) => (
                <section key={rowIndex} className='section2'>
                    <Grid container spacing={1} justifyContent="center">
                        {row.map((service, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card className='cardRestaurant'>
                                    <CardMedia className='cardMedia'
                                        component="img"
                                        alt={service.name}
                                        height="220px" 
                                        image={service.image}
                                    />
                                    <CardContent className='cardContent'>
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
    
  )
}
