import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { NavLink} from "react-router-dom";
import DeleteOrder from './DeleteOrder';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import PageTitle from '../../Shared/PageTitle/PageTitle';
const MyOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const [user] = useAuthState(auth);
        //All Produts Show

    const { isLoading, error, data:orders, refetch} = useQuery('orders', () =>
     fetch(`https://by-cycle.onrender.com/order/${user.email}`, {
         method: "GET",
          headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
     }).then(res =>res.json())
   )
     if(isLoading){
        return <Loading />
    }
    if(error){
        return toast.error(error.message);
    }
    return (
        <div>
            <PageTitle title="My Order" />

            <h2 className='text-center text-xl  md:text-3xl uppercase text-primary font-bold mb-5'>my orders</h2>
            <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>Product Img</th>
                    <th>Product Name</th>
                    <th>Total Price</th>
                    <th>Pay Status</th>
                    <th>Cencle</th>
                </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order._id}>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="rounded-lg w-24 h-24">
                                <img src={order.productImg} alt={order.productName} />
                            </div>
                            </div>
                        </div>
                        </td>
                        <td>
                            {order.productName}
                        </td>
                        <td>$ {parseInt(order.productPrice) * parseInt(order.quentity)}
                        </td>
                        <td>{
                            !order.paid ?  <NavLink to={`/deshboard/payment/${order._id}`} className="btn btn-secondary btn-sm">Pay</NavLink> :  <button className="btn btn-secondary btn-sm">Panding</button>
                            }
                       
                        </td>
                        <td>
                            {
                            !order.paid ? <label  onClick={() => setDeletingOrder(order)} htmlFor="handleDelete" className="btn btn-error text-white " >Cencle</label> :
                            <label  className="btn btn-error text-white" disabled>Cencle</label>
                   
                            }
                        
                        </td>
                    </tr>)
                    }
    
                </tbody>
            </table>
            </div>
            {deletingOrder && <DeleteOrder setDeletingOrder={setDeletingOrder} deletingOrder={deletingOrder} refetch={refetch} />}
        </div>
    );
};

export default MyOrders;