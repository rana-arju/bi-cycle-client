import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({deletingProduct, refetch, setDeletingProduct}) => {
    const {name, _id:id} = deletingProduct;
       const handleDelete = () => {
       fetch(`http://localhost:5000/products/${id}`, {
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

            <input type="checkbox" id="handleDelete" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Are You Sure?</h3>
                <p class="py-4 text-red-500">You Want To Delete {name}</p>
                <div class="modal-action">
                <button className="btn btn-error text-white " onClick={() => handleDelete()}>Delete</button>

                <label for="handleDelete" class="btn">Cencle</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DeleteModal;