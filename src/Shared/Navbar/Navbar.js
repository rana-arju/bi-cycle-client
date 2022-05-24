import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { NavLink} from "react-router-dom";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    const menu = <>
        <li className='mx-2'><NavLink to="/">Home</NavLink></li>
        <li className='mx-2'><NavLink to="/blog">Blog</NavLink></li>
        <li className='mx-2'><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li className='mx-2'>{user && <NavLink to="/deshboard">Deshboard</NavLink>}</li>
        </>
    
    return (
        <div className=' bg-base-200 '>
           <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                   {menu}
                </ul>
                </div>
                <a className="btn btn-ghost text-lg sm:text-xl md:text-2xl uppercase">Bicycle</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                {menu}
                </ul>
            </div>
            <div className="navbar-end">
            <div className="dropdown dropdown-end flex">

                {
                    user ? <> 
                    <div className='flex justify-center items-center'>
                        <span className=' hidden md:block pr-1 md:pr-3'>{user?.profileImg ? user?.userName : user.displayName}</span>
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar flex">
                    
                <div className="w-10 rounded-full">
                    {
                        user?.photoURL ? <img src={user?.photoURL} alt='...' /> : <img src="https://i.ibb.co/kG6vXJx/default-avatar-placeholder-profile-icon-male-vector.jpg" alt='...' />
                    }
                
                </div>
               
            </label>
            </div>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              
                <li><a onClick={logout}>Logout</a></li>
            </ul></> : 
            <ul className="menu menu-horizontal p-0">
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
            
             }
             {
                 user && <label for="deshboard-sidebar" className="btn btn-ghost drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
             }
            

            </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;