import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import DeleteOrder from '../MyOrders/DeleteOrder';
import PageTitle from '../../Shared/PageTitle/PageTitle';
const MyOrders = () => {
        //All Produts Show
    const [deletingOrder, setDeletingOrder] = useState(null);

  const { isLoading, error, data:orders, refetch} = useQuery('orders', () =>
     fetch(`https://bi-cycle-server.vercel.app/order`, {
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
		<PageTitle title="Not Found" />

            <h2 className='text-center text-xl  md:text-3xl uppercase text-primary font-bold mb-5'>my orders</h2>
            <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>Product Img</th>
                    <th>Product Name</th>
                    <th>Total Price</th>
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
                            {order.productName.slice(0,30) + "..."}
                        </td>
                        <td>$ {parseInt(order.productPrice) * parseInt(order.quentity)}</td>
                        <td> {order.email}</td>
                        <td> {order.quentity}</td>
                        <th>
                        <button className="btn btn-ghost btn-xs">Paid</button>
                        </th>
                          <td>
                            {
                            !order.paid ? <label  onClick={() => setDeletingOrder(order)} htmlFor="handleDelete" className="btn btn-error text-white " >Cencle</label> :
                            <label  className="btn btn-error text-white" disabled>Cencle</label>
                   
                            }
                        
                        </td>
                    </tr>
                )
                    }
               
    
                </tbody>
            </table>
            </div>
            {deletingOrder && <DeleteOrder setDeletingOrder={setDeletingOrder} deletingOrder={deletingOrder}  refetch ={refetch} />}
        </div>
    );
};

export default MyOrders;