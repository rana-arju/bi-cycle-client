import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialMedia from './SocialMedia';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';
import PageTitle from '../../Shared/PageTitle/PageTitle';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password =data.password;
        signInWithEmailAndPassword(email, password);
      };
      let errorMessage;
    if (error) {
        errorMessage = error.message;
  }

if (token) {
    navigate(from, { replace: true });
    return toast.success('Thank You! Login SuccessFull')
  }
  if (loading) {
    return <div className='h-40 mt-10'>{<Loading />}</div>
  }
 

    return (
        <div className='container flex h-1/2 md:h-screen justify-center items-center'>
            <PageTitle title="Login" />
            <div className="card w-full md:w-2/5 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold mb-5">Please Login</h2>
                   <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p className='text-red-500'>{errorMessage}</p>
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
                    <button className="btn btn-block btn-primary bg-gradient-to-r from-primary to-secondary text-white" type='submit'>Login</button>
                </div>
                    <p className='my-2 text-lg'>New To Doctor Portal? <span className='link text-primary'><Link to="/registation">Please Register</Link></span></p>
                </form>
                  <div className="divider">OR</div>

               <SocialMedia />
            </div>
            </div>
        </div>
    );
};

export default Login;