import React from 'react';
import AboutBike from './AboutBike';
import Blog from './Blog';
import Hero from './Hero';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutBike />
            <Products />
            <Blog />
        </div>
    );
};

export default Home;