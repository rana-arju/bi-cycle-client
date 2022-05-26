import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        if (user) {
        fetch(`http://localhost:5000/order/${user.email}`, {
          method: "GET",
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
        })
        .then(res => res.json())
        .then(data => {
          setOrder(data)
        })
        }

    },[user])
    return (
        <div>
            <h2 className='text-center text-xl  md:text-3xl uppercase text-primary font-bold mb-5'>my orders</h2>
            <div class="overflow-x-auto w-full">
            <table class="table w-full">
                <thead>
                <tr>
                    <th>Product Img</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Action</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  
                    <td>
                    <div class="flex items-center space-x-3">
                        <div class="avatar">
                        <div class="rounded-lg w-24 h-24">
                            <img src={orders.productImg} alt={orders.productName} />
                        </div>
                        </div>
                    </div>
                    </td>
                    <td>
                        {orders.productName}
                    </td>
                    <td>$ {orders.productPrice}</td>
                    <th>
                    <button class="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>
    
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyOrders;