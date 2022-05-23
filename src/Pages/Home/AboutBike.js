import React from 'react';

const AboutBike = () => {
    return (
        <div class="hero h-[350px] md:h-[550px] w-full">
        <div class="hero-content flex-col lg:flex-row">
            <img src="https://i.ibb.co/ZV49mFt/about-images.jpg" class="w-1/2 rounded-lg shadow-2xl" />
            <div className="w-1/2 ml-3">
            <h2 class="text-5xl font-bold">Best Adventure Tourer Bikes</h2>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default AboutBike;