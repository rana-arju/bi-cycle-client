import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
const Purchase = () => {
    const { register, formState: { errors }, handleSubmit} = useForm();
    const [user] = useAuthState(auth);
    let {id} = useParams();
    // find specipic product by id
   const [products, setProduct] = useState(null);

    useEffect(() =>{
        setTimeout(async() => {
            const res = await fetch(`http://localhost:5000/products/${id}`);
            const data = await res.json();
            setProduct(data);
        },2000);

    },[]);
    const onSubmit = data => {
        const email = user?.email;
        const name= user?.displayName;
        const order = {
            paid: false,
            productId: products._id,
            productImg: products.images,
            productName: products.name,
            productPrice: products.price,
            productDescription: products.description,
            phone:data?.phone,
            address:data?.address,
            quentity:data?.quentity,
            email:email,
            name:name
        }
           fetch('http://localhost:5000/order',{
            method: "POST",
            headers: {
                'content-type' : 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
           toast.success(`Successfully order one Product!`);
        })
    }

    return (
        <div>
            {
                products && <div className='container mx-auto md:w-10/12 my-10'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="card card-compact md:w-2/5 bg-base-100 shadow-xl">
                    <figure><img src={products.images} alt={products.name} className="h-[300px] w-full" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-secondary">Price: $ {products.price}</h2>
                        <h2 className="card-title">{products.name}</h2>
                        <p className='text-lg'>{products.description}</p>
                        <div>
                            <span className='capitalize font-bold'>Available Stock: {products.stock}</span>
                        </div>
                        <div><span className='capitalize font-bold'>Minimum Order: {products.minorder}</span>
                        </div>
                  
                    </div>
                    </div>
                <div className="card-body">
                <h2 className="text-center text-xl font-bold mb-5">Buyer Details</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                    <input type="email" className="input input-bordered w-full  block mb-5"  value={user?.email} disabled/>
                    </div>   
                    <div>
                        <input type="text" value={user?.displayName} disabled className="input input-bordered w-full  block mb-5" />
                    </div>
                    <div>
                        <p className='mb-3 text-red-500'> {errors.address?.type === 'required' && "Address is required*"}</p>
                        <input type="text" placeholder="Pick up location" className="input input-bordered w-full  block mb-5 " {...register("address", { required: true })} ></input>
                    </div>
                    <div>
                        <p className='mb-3 text-red-500'> {errors.phone?.type === 'required' && "Phone Number is required*"}</p>
                        <input type="number" placeholder="Phone" className="input input-bordered w-full  block mb-5 " {...register("phone", { required: true })} ></input>
                    </div>
                    <div>
                        <p className='mb-3 text-red-500'> {errors.quentity?.type === 'required' && "Quentity is required*"}</p>
                        <p className='mb-3 text-red-500'> {errors.quentity?.type === 'min' && "Enter Minimum Quentity or greater Then*"}</p>
                        <p className='mb-3 text-red-500'> {errors.quentity?.type === 'max' && "Enter max Quentity or less Then*"}</p>
                        <input type="number" placeholder={"Minimum Order " + products.minorder} className="input input-bordered w-full  block mb-5 " {...register("quentity", { required: true, min: products.minorder, max: products.stock})} ></input>
                    </div>
                    <div className='text-center'>
                        <button className="btn btn-block btn-primary bg-gradient-to-r from-primary to-secondary text-white" type='submit'>Place Order</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            }
            {!products && <Loading />}
            
        </div>
    )
        }

export default Purchase;