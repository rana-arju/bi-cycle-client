import React from 'react';

const AboutBike = () => {
    return (
        <div className="hero h-[350px] md:h-[550px] w-full">
        <div className="hero-content flex-col lg:flex-row">
            <img src="https://i.ibb.co/ZV49mFt/about-images.jpg" className="w-1/2 rounded-lg shadow-2xl" />
            <div className="w-1/2 ml-3">
            <h2 className="text-5xl font-bold">Best Adventure Tourer Bikes</h2>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default AboutBike;