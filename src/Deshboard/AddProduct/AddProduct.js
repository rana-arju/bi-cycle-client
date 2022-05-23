import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const AddProduct = () => {
    const [user] = useAuthState(auth);
    const handleProductAdd = event => {
        event.preventDefault();
    }
    return (
    <div className='container flex h-full  justify-center items-center md:my-24'>
            <div className="card w-full md:w-10/12 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold mb-5">Add New Product</h2>
                <form onSubmit={handleProductAdd}>
                <div>
                    <input type="text" placeholder="Product Name" name='productName' className="input input-bordered w-full  block mb-5"  />
                </div>
                <div>
                <input type="email" className="input input-bordered w-full  block mb-5"  value={user?.email} disabled/>
                </div>   
                <div>
                    <input type="text" name='seller' value={user?.displayName} disabled className="input input-bordered w-full  block mb-5" />
                </div>
                <div>
                    <input type="number" name='price' placeholder="Price per product" className="input input-bordered w-full  block mb-5" />
                </div>
                <div>
                    <input type="number" name='stock' placeholder="Available Stock" className="input input-bordered w-full  block mb-5" />
                </div>
                <div>
                    <input type="number" name='minorder' placeholder="Mimum Orders" className="input input-bordered w-full  block mb-5" />
                </div>      
                <div className='flex items-center space-x-6 my-5'>
                <div class="shrink-0">
                    <img class="object-cover w-16 h-16 rounded-full"
                    src="https://i.ibb.co/kG6vXJx/default-avatar-placeholder-profile-icon-male-vector.jpg" alt="..." />
                </div>
                <label class="block ">
                    <span class="sr-only cursor-pointer ">Product Image</span>
                    <input type="file"
                    class="block cursor-pointer w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                </label>
                </div>
                 <div>
                    <textarea class="textarea textarea-bordered w-full  block mb-5 h-32" placeholder="Product Description..."></textarea>
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