import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
     //six item show help of this api
    const [products, setproduct] = useState([]);
    useEffect(()=>{
        fetch('https://by-cycle.onrender.com/products')
        .then(res => res.json())
        .then(data => setproduct(data))
    },[]);
    return (
        <div className='container px-2 mx-auto'>
             <h2 className='uppercase text-center text-xl sm:text-2xl md:text-4xl my-5'>New Products</h2>
        <div className=' grid grid-1 md:grid-2 lg:grid-cols-3 gap-4'>
           
            {
                products.map(product => <Product key={product._id} product ={product} />)
            }
        </div>
        </div>
    );
};

export default Products;