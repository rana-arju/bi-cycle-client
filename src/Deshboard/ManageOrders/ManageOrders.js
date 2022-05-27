import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
        //All Produts Show

    const [orders, setOrder] = useState([]);
    useEffect(() => {
        if (user) {
        fetch(`http://localhost:5000/order`, {
          method: "GET",
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
        }
        )
        .then(res => res.json())
        .then(data => setOrder(data))
        }

    },[user])
    console.log(orders);
    return (
        <div>
            <h2 className='text-center text-xl  md:text-3xl uppercase text-primary font-bold mb-5'>my orders</h2>
            <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>Product Img</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>email</th>
                    <th>Quentity</th>
                    <th>Payment</th>
                    <th>Delete</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {
                        orders && orders?.map(order =>  <tr key={order._id}>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="rounded-lg w-24 h-24">
                                <img src={order.productImg} alt={orders.productName} />
                            </div>
                            </div>
                        </div>
                        </td>
                        <td>
                            {order.productName}
                        </td>
                        <td>$ {order.productPrice}</td>
                        <td> {order.email}</td>
                        <td> {order.quentity}</td>
                        <th>
                        <button className="btn btn-ghost btn-xs">Paid</button>
                        </th>
                        <th>
                        <button className="btn btn-ghost btn-xs uppercase">Delete</button>
                        </th>
                    </tr>
                )
                    }
               
    
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyOrders;