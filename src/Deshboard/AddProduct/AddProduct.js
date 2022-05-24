import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const AddProduct = () => {
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
                const img = result.data.url;
                const product = {
                    sellar: name,
                    email: email,
                    name: data.productName,
                    description: data.description,
                    images: img,
                    stock: data.stock,
                    minorder: data.minorder,
                    price: data.price
                }
                //send fata on database
                fetch('http://localhost:5000/products', {
                    method: "POST",
                    headers: {
                    'content-type': "application/json",
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`

                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(insertData => {
                    if (insertData.insertedId) {
                        toast.success('You are Successfully Added one Product!')
                    }
                })
            }
        })
    }
    return (
    <div className='container flex h-full  justify-center items-center md:my-24'>
            <div className="card w-full md:w-10/12 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold mb-5">Add New Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                     <p className='mb-3 text-red-500'> {errors.productName?.type === 'required' && "Product name is required*"}</p>
                    <input type="text" placeholder="Product Name" className="input input-bordered w-full  block mb-5" {...register("productName", { required: true })} />
                </div>
                <div>
                <input type="email" className="input input-bordered w-full  block mb-5"  value={user?.email} disabled/>
                </div>   
                <div>
                    <input type="text" name='seller' value={user?.displayName} disabled className="input input-bordered w-full  block mb-5" />
                </div>
                <div>
                    <p className='mb-3 text-red-500'> {errors.price?.type === 'required' && "Price is required*"}</p>
                    <input type="number" name='price' placeholder="Price per product" className="input input-bordered w-full  block mb-5" {...register("price", { required: true })} />
                </div>
                <div>
                      <p className='mb-3 text-red-500'> {errors.stock?.type === 'required' && "Stock is required*"}</p>
                    <input type="number" name='stock' placeholder="Available Stock" className="input input-bordered w-full  block mb-5" {...register("stock", { required: true })} />
                </div>
                <div>
                     <p className='mb-3 text-red-500'> {errors.minorder?.type === 'required' && "Minimum Order is required*"}</p>

                    <input type="number" name='minorder' placeholder="Mimum Orders" className="input input-bordered w-full  block mb-5"  {...register("minorder", { required: true })} />
                </div> 
                <p className='mb-3 text-red-500'> {errors.image?.type === 'required' && "Image is required*"}</p>    
                <div className='flex items-center space-x-6 my-5'>
                

                <div class="shrink-0">
                    <img class="object-cover w-16 h-16 rounded-full"
                    src="https://i.ibb.co/kG6vXJx/default-avatar-placeholder-profile-icon-male-vector.jpg" alt="..." />
                </div>
                <label class="block ">
                    <span class="sr-only cursor-pointer ">Product Image</span>
                    <input type="file" name='image'
                    class="block cursor-pointer w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"  {...register("image", { required: true })} />
                </label>
                </div>
                 <div>
                    <p className='mb-3 text-red-500'> {errors.description?.type === 'required' && "Description is required*"}</p>

                    <textarea name='description' class="textarea textarea-bordered w-full  block mb-5 h-32" placeholder="Product Description..." {...register("description", { required: true })} ></textarea>
                </div>
                <div className='text-center'>
                    <button className="btn btn-block btn-primary bg-gradient-to-r from-primary to-secondary text-white" type='submit'>Add Product</button>
                </div>
                </form>
               
            </div>
            </div>
        </div>
    );
};

export default AddProduct;