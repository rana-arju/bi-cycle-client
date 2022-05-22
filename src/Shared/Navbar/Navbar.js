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
        </>
    
    return (
        <div className=' bg-base-200 '>
           <div class="navbar container mx-auto">
            <div class="navbar-start">
                <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                   {menu}
                </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                {menu}
                </ul>
            </div>
            <div className="navbar-end">
            <div class="dropdown dropdown-end">
                {
                    user ? <> 
                    <div className='flex justify-center items-center'>
                        <span className=' hidden sm:block pr-1 md:pr-3'>{user?.profileImg ? user?.userName : user.displayName}</span>
                <label tabindex="0" class="btn btn-ghost btn-circle avatar flex">
                    
                <div class="w-10 rounded-full">
                    {
                        user?.photoURL ? <img src={user?.photoURL} alt='...' /> : <img src="https://i.ibb.co/kG6vXJx/default-avatar-placeholder-profile-icon-male-vector.jpg" alt='...' />
                    }
                
                </div>
               
            </label>
            </div>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <NavLink class="justify-between" to="/profile">Profile</NavLink>
                </li>
                <li><a onClick={logout}>Logout</a></li>
            </ul></> : 
            <ul class="menu menu-horizontal p-0">
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
             }
            </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;