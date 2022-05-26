import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
        //All Produts Show
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        if (user) {
        fetch(`https://arcane-inlet-91838.herokuapp.com/order/${user.email}`, {
          method: "GET",
          headers: {
            'content-type': 'application/json',
          },
        }
        )
        .then(res => res.json())
        .then(data => console.log(data))
        }

    },[user])
   
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
                    <th>Paid</th>
                    <th>Cencle</th>
                </tr>
                </thead>
                <tbody>
                   
                        <tr>

                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="rounded-lg w-24 h-24">
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
                        <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                ) 
                   
               
    
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyOrders;