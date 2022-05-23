import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
     //six item show help of this api
    const [products, setproduct] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setproduct(data))
    },[]);
    return (
        <div className='container mx-auto grid grid-1 md:grid-2 lg:grid-cols-3 gap-4'>
            {
                products.map(product => <Product key={product._id} product ={product} />)
            }
        </div>
    );
};

export default Products;