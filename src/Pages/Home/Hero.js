import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink} from "react-router-dom";
import auth from '../../firebase.init';

const Hero = () => {
    const [user] = useAuthState(auth);
    return (
        <div class="hero h-[350px] md:h-[550px] w-full" style={{backgroundImage: `url(https://i.ibb.co/6RMg2J8/pexels-tony-990113-1.jpg)`,backgroundSize: "cover", backgroundPosition: "center center"}}>
        <div class=" container mx-auto ">
            
            <div className='w-full px-3 md:w-3/5 text-white'>
            <h1 class=" text-xl sm:text-2xl md:text-5xl font-bold capitalize">leargest bicycle manufacturer</h1>
            <p class="py-6">check out our exclusive collection of mountain bikes. city bikes, girl cycles and more.</p>
            <button class="btn btn-primary">{user ?  <NavLink to="/deshboard">Your Profile</NavLink> : <NavLink to="/login">Login</NavLink> }</button>
            </div>
        </div>
        </div>
    );
};

export default Hero;