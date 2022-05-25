import React from 'react';
import { NavLink} from 'react-router-dom';

const AboutBike = () => {
    return (
        <div className="hero h-full md:h-[550px] w-full">
        <div className="hero-content flex-col md:flex-row">
            <img src="https://i.ibb.co/ZV49mFt/about-images.jpg" className="w-full md:w-1/2 rounded-lg shadow-2xl" alt='
            ..'/>
            <div className="w-full md:w-1/2 ml-3">
            <h2 className=" text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">Best Adventure Tourer Bikes</h2>
            <p className="py-6">Hero Cycles is a leader in both the standard and premium segments in Bangladesh, with an overall market share of nearly 43 percent. The company is equipped with state-of-the-art infrastructure and the most modern machinery producing major bicycle components within its premise under stringent quality parameters complying with all global standards. Hero Cycles has a network of over 250 suppliers and 2800 dealerships in India and exports to various countries in the Middle East, Africa, Asia, and Europe.
            </p>
            <NavLink to="/login"><button className="btn btn-primary">Get Started</button></NavLink>
            </div>
        </div>
        </div>
    );
};

export default AboutBike;