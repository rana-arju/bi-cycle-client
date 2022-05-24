import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Profile = () => {
        const [user] = useAuthState(auth);
    return (
          <div className='container flex h-full  justify-center items-center md:my-24'>
            <div className="card w-full md:w-3/5 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold mb-5">My Profile</h2>
                <div>
                <label tabindex="0" class=" btn-circle avatar flex">
                    
                <div class="w-24 rounded-full">
                    {
                        user?.photoURL ? <img src={user?.photoURL} alt='...' /> : <img src="https://i.ibb.co/kG6vXJx/default-avatar-placeholder-profile-icon-male-vector.jpg" alt='...' />
                    }
                
                </div>
            </label>
                    <ul>
                        <li className='my-2'>Full Name: <span className='font-bold text-accent'>{user?.displayName}</span></li>
                        <li className='my-2'>User Name: <span className='font-bold text-accent'>{user?.userName ? user?.displayName : "add user name"}</span></li>
                        <li className='my-2'>Email: <span className='font-bold text-accent'>{user?.email ? user?.email : "add email"}</span></li>
                        <li>Phone Number: <span className='font-bold text-accent'>{user?.phone ? user?.phone : "018*****"}</span></li>
                        <li>Location: <span className='font-bold text-accent'>{user?.division}</span> || <span>{user?.district}</span></li>
                        <li>Linkedin: <button className='btn btn-primary  my-3 text-white'>{user?.linkedin ? <a href={user?.linkedin}>Linkdin</a> : <a href="https://www.linkedin.com/ranaarju">Linkdin</a>}</button></li>
                        <li>Github: <button className='btn btn-primary  my-3 text-white '>{user?.linkedin ? <a href={user?.linkedin}>Linkdin</a> : <a href="https://www.linkedin.com/ranaarju">Linkdin</a>}</button></li>
                       
                    </ul>
                </div>
                
                <div className='text-center'>
                    <NavLink to="update"><button className="btn btn-block btn-primary bg-gradient-to-r from-primary to-secondary text-white" >Update Profile</button></NavLink>
                </div>
              
               
            </div>
            </div>
        </div>
    );
};

export default Profile;