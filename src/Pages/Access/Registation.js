import React from 'react';
import SocialMedia from './SocialMedia';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
// import useToken from '../../hooks/useToken';

const Registation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth);
const { register, formState: { errors }, handleSubmit } = useForm();
// const [token] = useToken(user);
let RegErrror;
if (error || updateError) {
   RegErrror = <p className='text-red-500'>{error?.message || updateError?.message}</p>
  }
  if (loading || updating) {
    return <div className='h-40 mt-10'>{<Loading />}</div>
  }
  if (user) {
    navigate(from, { replace: true });
    return toast.success('Thank You! Registation Successful')
  }
const onSubmit = async(event) => {
    const email = event.email;
    const password = event.password;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: event.fullName});

};
    return (
        <div className='container flex h-1/2 md:h-screen justify-center items-center'>
            <div className="card w-full md:w-2/5 bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='mb-5'>{RegErrror}</p>
                <h2 className="text-center text-xl font-bold mb-5">Please Register</h2>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p className='mb-3 text-red-500'> {errors.fullName?.type === 'required' && "Full name is required*"}</p>
                    <input type="text" placeholder="Full Name" className="input input-bordered w-full  block mb-5" {...register("fullName", { required: true })} />
                   
                </div>
                <div>
                <p className='mb-3 text-red-500'>
                {errors.email?.type === 'required' && <span>{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span>{errors.email.message}</span> }
                </p>
                <input type="email" placeholder="Eamil" className="input input-bordered w-full  block mb-5" {...register("email", {required: {
                    value: true,
                    message: 'Email is required*'
                },
                 pattern: {
                    value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Provide a Valid Email',
                }
                  })} />
                </div>                    
                <div>
                <p className='mb-3 text-red-500'>
                    {errors.password?.type === 'required' && <span>{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span>{errors.password.message}</span> }
                </p>
                    <input type="password" placeholder="Password" className="input form-control input-bordered w-full  block mb-5" {...register("password", {
                required: {
                    value: true,
                    message: 'Password is required*'
                },
                 minLength: {
                    value: 8,
                    message: 'Enter At Least 8 Character'
                }
                  })} />
                </div>
                <div className='text-center'>
                    <button className="btn btn-block btn-primary bg-gradient-to-r from-primary to-secondary text-white" type='submit'>Register</button>
                </div>
                <p className='my-2 text-lg'>Already Have an account? <span className='link text-primary'><Link to="/login">Please Login</Link></span> </p>
                </form>
                <div className="divider">OR</div>
               <SocialMedia />
            </div>
            </div>
        </div>
    );
};

export default Registation;