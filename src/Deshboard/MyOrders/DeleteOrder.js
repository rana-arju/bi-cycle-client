import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrder = ({deletingOrder, refetch, setDeletingOrder}) => {
    const {productName, _id:id} = deletingOrder;
       const handleDelete = () => {
       fetch(`https://arcane-inlet-91838.herokuapp.com/order/${id}`, {
           method: "DELETE",
           headers: {
            'content-type': 'application/json',
           'authorization': `Bearer ${localStorage.getItem('accessToken')}`
           }
       })
       .then(res => res.json())
       .then(data => {
            setDeletingOrder(null)
            refetch();
            toast.success('Order Remove Successful!');
       })
    }
    return (
        <div>

            <input type="checkbox" id="handleDelete" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Are You Sure?</h3>
                <p className="py-4 text-red-500">You Want To Cencle {productName}</p>
                <div className="modal-action">
                <button className="btn btn-error text-white " onClick={() => handleDelete()}>Yes</button>
                <label htmlFor="handleDelete" className="btn">No</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DeleteOrder;