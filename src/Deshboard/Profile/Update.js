import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const Update = () => {
    const { register, formState: { errors }, handleSubmit} = useForm();
    const [user] = useAuthState(auth);
    const imgStorageKey = '58d3c7355cf533547f2645e98915da5c';
    const onSubmit = data => {
        const email = user?.email;
        const name= user?.displayName;
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if (result.success) {
                const img = result?.data?.url;
                console.log(img);
                const user = {
                    name: name,
                    email: email,
                    userName: data.userName,
                    study: data.study,
                    image: img,
                    phone: data.phone,
                    division: data.division,
                    distic: data.distic,
                    linkedin: data.linkedin,
                    github: data.github
                }
                //send fata on database
                fetch(`http://localhost:5000/user/${email}`, {
                    method: "PUT",
                    headers: {
                    'content-type': "application/json",
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(insertData => {
                    toast.success('You are Successfully Update Profile!')
                })
            }
        })
    }
    return (
    <div className='container flex h-full  justify-center items-center md:my-32'>
            <div className="card w-full md:w-10/12 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold mb-5">Add New Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                     <p className='mb-3 text-red-500'> {errors.userName?.type === 'required' && "User name is required*"}</p>
                    <input type="text" placeholder="User Name" className="input input-bordered w-full  block mb-5" {...register("userName", { required: true })} />
                </div>
                <div>
                <input type="email" className="input input-bordered w-full  block mb-5"  value={user?.email} disabled/>
                </div>   
                <div>
                    <input type="text" name='seller' value={user?.displayName} disabled className="input input-bordered w-full  block mb-5" />
                </div>
                <div>
                    <p className='mb-3 text-red-500'> {errors.phone?.type === 'required' && "Phone is required*"}</p>
                    <input type="number" name='phone' placeholder="Phone" className="input input-bordered w-full  block mb-5" {...register("phone", { required: true })} />
                </div>
                <div>
                      <p className='mb-3 text-red-500'> {errors.study?.type === 'required' && "study is required*"}</p>
                    <input type="text" name='study' placeholder="Study On" className="input input-bordered w-full  block mb-5" {...register("study", { required: true })} />
                </div>
                <div>
                     <p className='mb-3 text-red-500'> {errors.division?.type === 'required' && "division is required*"}</p>

                    <input type="text" name='division' placeholder="Division" className="input input-bordered w-full  block mb-5"  {...register("division", { required: true })} />
                </div>
                <div>
                     <p className='mb-3 text-red-500'> {errors.distic?.type === 'required' && "Distic is required*"}</p>

                    <input type="text" name='distic' placeholder="Distric" className="input input-bordered w-full  block mb-5"  {...register("distic", { required: true })} />
                </div>
                <div>
                     <p className='mb-3 text-red-500'> {errors.linkedin?.type === 'required' && "Linkedin URL is required*"}</p>

                    <input type="url" name='linkedin' placeholder="Linkedin URL" className="input input-bordered w-full  block mb-5"  {...register("linkedin", { required: true })} />
                </div>
                <div>
                     <p className='mb-3 text-red-500'> {errors.github?.type === 'required' && "Github URL is required*"}</p>

                    <input type="url" name='github' placeholder="Github URL" className="input input-bordered w-full  block mb-5"  {...register("github", { required: true })} />
                </div> 
                <p className='mb-3 text-red-500'> {errors.image?.type === 'required' && "Image is required*"}</p>    
                <div className='flex items-center space-x-6 my-5'>
                

                <div className="shrink-0">
                    <img className="object-cover w-16 h-16 rounded-full"
                    src="https://i.ibb.co/kG6vXJx/default-avatar-placeholder-profile-icon-male-vector.jpg" alt="..." />
                </div>
                <label className="block ">
                    <span className="sr-only cursor-pointer ">Product Image</span>
                    <input type="file" name='image'
                    className="block cursor-pointer w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"  {...register("image", { required: true })} />
                </label>
                </div>
           
                <div className='text-center'>
                    <button className="btn btn-block btn-primary bg-gradient-to-r from-primary to-secondary text-white" type='submit'>All Save</button>
                </div>
                </form>
               
            </div>
            </div>
        </div>
    );
};

export default Update;