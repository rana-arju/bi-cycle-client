import React from 'react';
import AboutBike from './AboutBike';
import Blog from './Blog';
import BusinessStatus from './BusinessStatus';
import Hero from './Hero';
import Products from './Products';
import Reviws from './Reviws';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutBike />
            <Products />
            <BusinessStatus />
            <Blog />
            <Reviws />
        </div>
    );
};

export default Home;