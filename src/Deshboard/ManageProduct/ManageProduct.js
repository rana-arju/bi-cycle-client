import React from 'react';
import { toast } from 'react-toastify';

const ManageProduct = ({product, refetch, setDeletingProduct}) => {
    const {name, _id:id, description, images, stock,minorder, price}= product;
 
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
         <figure><img src={images} alt={name} className="h-[300px] w-full" /></figure>
        <div className="card-body">
            <h2 className="card-title text-secondary">Price: $ {price}</h2>
            <h2 className="card-title">{name}</h2>
            <p className='text-lg'>{description.slice(0,100) + "...."}</p>
            <div>
                <span className='capitalize font-bold'>Available Stock: {stock}</span> </div><div><span className='capitalize font-bold'>Minimum Order: {minorder}</span>
            </div>
            
            <div className="card-actions justify-end">
            <label onClick={() => setDeletingProduct(product)} htmlFor="handleDelete" className="btn btn-error text-white btn-block">Delete</label>

            </div>
        </div>
        </div>
    );
};

export default ManageProduct;