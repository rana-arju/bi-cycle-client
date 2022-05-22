import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Profile = () => {
        const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async(event) => {
    const email = event.email;
    const password = event.password;
   

};
    return (
          <div>
        
        </div>
    );
};

export default Profile;