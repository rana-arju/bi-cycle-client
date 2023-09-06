import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import PageTitle from "../../Shared/PageTitle/PageTitle";
const Profile = () => {
        const [user] = useAuthState(auth);
        const [users, setUser] = useState([]);
        useEffect(() => {
            const email = user?.email;
            fetch(`https://by-cycle.onrender.com/user/${email}`, {
                method: "GET", 
                headers: {
                    'content-type': 'application/json'
                }
                
            })
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
        },[user]);
    return (
          <div className='container flex h-full  justify-center items-center md:my-24'>
            <PageTitle title="Profile" />
            <div className="card w-full md:w-3/5 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold mb-5">My Profile</h2>
                <div>
                <label tabIndex="0" className=" btn-circle avatar flex">
                <div className="w-24 rounded-full">
                   <img src={users?.image} alt='...' />
                 
                </div>
            </label>
               <ul>
                    <li className='my-2'>Full Name: <span className='font-bold text-accent'>{users?.name}</span></li>
                    <li className='my-2'>User Name: <span className='font-bold text-accent'>{users?.userName ? users?.userName : "add user name"}</span></li>
                    <li className='my-2'>Email: <span className='font-bold text-accent'>{users?.email}</span></li>
                    <li>Phone Number: <span className='font-bold text-accent'>{users?.phone ? users?.phone : "018*****"}</span></li>
                    <li>Location: <span className='font-bold text-accent'>{users?.division}</span> &gt;&gt; <span className='font-bold text-accent'>{users?.distic}</span></li>
                    <li>
                        Linkedin: <button className='btn btn-primary  my-3 text-white'>{users?.linkedin ? <a href={users?.linkedin}>Linkdin</a> : <a href="https://www.linkedin.com/in/rana-arju">Linkdin</a>}</button>
                    </li>
                    <li>
                        Github: <button className='btn btn-primary  my-3 text-white '>{users?.github ? <a href={users?.linkedin}>Github</a> : <a href="https://github.com/rana-arju">Github</a>}</button>
                    </li>
                       
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