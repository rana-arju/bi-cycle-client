import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({deletingProduct, refetch, setDeletingProduct}) => {
    const {name, _id:id} = deletingProduct;
       const handleDelete = () => {
       fetch(`https://bi-cycle-server.vercel.app/products/${id}`, {
           method: "DELETE",
           headers: {
           'authorization': `Bearer ${localStorage.getItem('accessToken')}`
           }
       })
       .then(res => res.json())
       .then(data => {
           if (data.deletedCount) {
               setDeletingProduct(null)
               refetch();
               toast.success('One Product Delete Successfully!');
           }
       })
    }
    return (
        <div>

            <input type="checkbox" id="handleDelete" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Are You Sure?</h3>
                <p className="py-4 text-red-500">You Want To Delete {name}</p>
                <div className="modal-action">
                <button className="btn btn-error text-white " onClick={() => handleDelete()}>Remove</button>

                <label htmlFor="handleDelete" className="btn">Cencle</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DeleteModal;