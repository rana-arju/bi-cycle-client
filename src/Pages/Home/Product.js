import React from 'react';
import {useNavigate} from 'react-router-dom';

const Product = ({product}) => {
    const navigate = useNavigate();
    const {name, _id:id, description, images, stock,minorder, price}= product;
    const handleBuy = (id) => {
        const path = `/purchase/${id}`;
        navigate(path);
    }
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
         <figure><img src={images} alt={name} className="h-[300px] w-full" /></figure>
        <div class="card-body">
            <h2 class="card-title text-secondary">Price: $ {price}</h2>
            <h2 class="card-title">{name}</h2>
            <p className='text-lg'>{description.slice(0,100) + "...."}</p>
            <div>
                <span className='capitalize font-bold'>Available Stock: {stock}</span> </div><div><span className='capitalize font-bold'>Minimum Order: {minorder}</span>
            </div>
            
            <div class="card-actions justify-end">
            <button class="btn btn-primary btn-block" onClick={() => handleBuy(id)}>Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default Product;