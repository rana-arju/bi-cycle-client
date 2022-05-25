import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink} from "react-router-dom";
import auth from '../../firebase.init';

const Hero = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="hero h-[350px] md:h-[550px] w-full" style={{backgroundImage: `url(https://i.ibb.co/LrTSSGw/pexels-tony-990113-2.jpg)`,backgroundSize: "cover", backgroundPosition: "center center"}}>
        <div className=" container mx-auto ">
            
            <div className='w-full px-3 md:w-3/5 text-white'>
            <h1 className=" text-xl sm:text-2xl md:text-5xl font-bold capitalize">leargest bicycle manufacturer</h1>
            <p className="py-6">check out our exclusive collection of mountain bikes. city bikes, girl cycles and more.</p>
            <button className="btn btn-primary">{user ?  <NavLink to="/deshboard">Your Profile</NavLink> : <NavLink to="/login">Login</NavLink> }</button>
            </div>
        </div>
        </div>
    );
};

export default Hero;