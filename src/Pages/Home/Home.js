import React from 'react';
import AboutBike from './AboutBike';
import Blog from './Blog';
import BusinessStatus from './BusinessStatus';
import Hero from './Hero';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutBike />
            <Products />
            <BusinessStatus />
            <Blog />
        </div>
    );
};

export default Home;