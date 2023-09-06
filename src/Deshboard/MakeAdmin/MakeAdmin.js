import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import DeleteAdmin from './DeleteAdmin';
import User from './User';

const MakeAdmin = () => {
    const [deletingAdmin, setDeletingAdmin] = useState(null);
    const { isLoading, error, data:users, refetch} = useQuery('users', () =>
     fetch(`https://bi-cycle-server.vercel.app/user`, {
         method: "GET",
          headers: {
            'content-type': 'application/json',
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
    console.log(users);
    return (
    <div>
        <PageTitle title="Make Admin" />

        <h2>Total Users: {users.length}</h2>
        <div className="overflow-x-auto">
         <table className="table w-full">
            <thead>
            <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
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