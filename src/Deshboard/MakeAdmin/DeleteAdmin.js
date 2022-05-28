import React from 'react';
import { toast } from 'react-toastify';

const DeleteAdmin = ({deletingAdmin, refetch, setDeletingAdmin}) => {
    const {name, email} = deletingAdmin;
       const handleDelete = () => {
       fetch(`https://arcane-inlet-91838.herokuapp.com/admin/${email}`, {
           method: "PUT",
           headers: {
            'content-type': 'application/json',
           'authorization': `Bearer ${localStorage.getItem('accessToken')}`
           }
       })
       .then(res => res.json())
       .then(data => {
            setDeletingAdmin(null)
            refetch();
            toast.success('Admin Remove Successfully!');
       })
    }
    return (
        <div>

            <input type="checkbox" id="handleDelete" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Are You Sure?</h3>
                <p className="py-4 text-red-500">You Want To Remove {name}</p>
                <div className="modal-action">
                <button className="btn btn-error text-white " onClick={() => handleDelete()}>Delete</button>
                <label htmlFor="handleDelete" className="btn">Cencle</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DeleteAdmin;