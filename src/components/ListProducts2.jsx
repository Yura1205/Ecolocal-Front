import React, { useEffect, useState } from 'react';
import '../styles/listproducts2.css';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ListProducts2 = () => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://89.116.25.43:4291/api/products/listar/asc');
                const apiData = await response.json();
                setProductsData(apiData.result);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Cargando...</p>;
    }

    const rows = [];
    const itemsPerRow = 4;

    for (let i = 0; i < productsData.length; i += itemsPerRow) {
        const rowItems = productsData.slice(i, i + itemsPerRow);
        rows.push(rowItems);
    }

    const SaberMas = () => {
        navigate('/Info');
    };

    return (
        <>
            {rows.map((row, rowIndex) => (
                <section key={rowIndex} className='section2p'>
                    <Grid container spacing={1} justifyContent="center">
                        {row.map((product, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card className='cardp'>
                                    <CardMedia
                                        className='CardMedia'
                                        component="img"
                                        alt={product.nombre}
                                        height="220px"
                                        image={product.img}
                                    />
                                    <CardContent className='CardContent'>
                                        <Typography variant="h5" component="div">
                                            {product.nombre}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.descripcion}
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