import React from 'react';
import { DashboardNav } from '../components/DashboardNav';
import { MapComponent } from '../components/MapComponent';
import { ListRestaurants } from '../components/ListRestaurants';
import '../styles/restaurants.css';
export const Restaurants = () => {

    return (
        <>
            <DashboardNav/>
            <section className='mapSection'>
                <div className='mapContainer'>
                    <h1 className='restaurantTitle'>RESTAURANTES</h1>
                    <MapComponent/>
                </div>
                
            </section>
            <ListRestaurants/>
            
        </>
    );
};

export default Restaurants;