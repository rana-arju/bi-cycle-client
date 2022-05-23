import React from 'react';
import AboutBike from './AboutBike';
import Hero from './Hero';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutBike />
            <Products />
        </div>
    );
};

export default Home;