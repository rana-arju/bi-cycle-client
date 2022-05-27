import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import DeleteAdmin from './DeleteAdmin';
import User from './User';

const MakeAdmin = () => {
    const [deletingAdmin, setDeletingAdmin] = useState(null);
    const { isLoading, error, data:users, refetch} = useQuery('users', () =>
     fetch(`http://localhost:5000/user`, {
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
        <h2>Total Users: {users.length}</h2>
        <div className="overflow-x-auto">
         <table className="table w-full">
            <thead>
            <tr>
                <th>SL</th>
                <th>Email</th>
                <th>Make</th>
                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) => <User user= {user}  key={user._id} refetch={refetch} index={index} setDeletingAdmin={setDeletingAdmin} />)
                    }
                </tbody>
            </table>
            </div>
             {deletingAdmin && <DeleteAdmin setDeletingAdmin={setDeletingAdmin} deletingAdmin={deletingAdmin} refetch={refetch} />}
        </div>
    );
};

export default MakeAdmin;