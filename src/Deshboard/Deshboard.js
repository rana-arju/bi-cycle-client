import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import  useAdmin from '../hooks/useAdmin.js';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Deshboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
        <input id="deshboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <h2 className="text-center text-4xl my-3">Deshboard</h2>
            <Outlet />
        
        </div> 
        <div class="drawer-side mr-3">
            <label for="deshboard-sidebar" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-full sm:w-10/12 md:w-80 bg-base-200 rounded text-base-content">
            <li className='mb-1'><NavLink to='/deshboard'>My Profile</NavLink></li>
            <li className='mb-1'><NavLink to='orders'>My Orders</NavLink></li>
            <li className='mb-1'><NavLink to='review'>Add Review</NavLink></li>
            {admin && <>
            <li className='mb-1'><NavLink to='addproduct'>Add Product</NavLink></li>
            <li className='mb-1'><NavLink to='manageorders'>Manage Orders</NavLink></li>
            <li className='mb-1'><NavLink to='manageproduct'>Manage Product</NavLink></li>
            <li className='mb-1'><NavLink to='makeadmin'>Make Admin</NavLink></li>
            </>
            }
            </ul>
        
        </div>
        </div>
    );
};

export default Deshboard;