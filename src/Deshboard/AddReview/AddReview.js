import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const AddReviws = () => {
    const { register, formState: { errors }, handleSubmit} = useForm();
    const [user] = useAuthState(auth);
    //get From data and send/post database
    const onSubmit = data => {
        const email = user?.email;
        const name= user?.displayName;
        const reviews = {
            review:data?.review,
            ratting:data?.ratting,
            email:email,
            name:name
        }
        //add new review on database
                fetch('http://localhost:5000/review', {
                    method: "POST",
                    headers: {
                    'content-type': "application/json",

                    },
                    body: JSON.stringify(reviews)
                })
                .then(res => res.json())
                .then(insertData => {
                    if (insertData.insertedId) {
                        toast.success('You are Successfully Added one Review!')
                    }
                })
    }
    return (
  <div className='container flex h-full  md:my-32'>
            <div className="card w-full md:w-10/12 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold mb-5">Add New Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                     <p className='mb-3 text-red-500'> {errors.review?.type === 'required' && "Review is required*"}</p>
                    <textarea type="text" placeholder="Write Review.." className="input input-bordered w-full  block mb-5 h-32" {...register("review", { required: true })} ></textarea>
                </div>
                <div>
                 <p className='mb-3 text-red-500'> {errors.ratting?.type === 'required' && "ratting is required*"}</p>

                <select className="select select-bordered w-full block mb-5" {...register("ratting", { required: true })}>
                    <option disabled selected>5</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                </div>
                <div>
                <input type="email" className="input input-bordered w-full  block mb-5"  value={user?.email} disabled/>
                </div>   
                <div>
                    <input type="text" name='seller' value={user?.displayName} disabled className="input input-bordered w-full  block mb-5" />
                </div>
                <div className='text-center'>
                    <button className="btn btn-block btn-primary bg-gradient-to-r from-primary to-secondary text-white" type='submit'>Add Review</button>
                </div>
                </form>
               
            </div>
            </div>
        </div>
    );
};

export default AddReviws;