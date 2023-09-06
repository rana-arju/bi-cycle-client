import React from 'react';
import { toast } from 'react-toastify';

const User = ({user, refetch, index, setDeletingAdmin}) => {
        const {email,name, role} = user;
        const makeAdmin = () => {
        const {email }= user;
        fetch(`https://bi-cycle-server.vercel.app/user/admin/${email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res => {
            if (res.status === 403) {
                toast.error('Failed to make an admin')
            }
            return res.json();
        })
        .then(data => {
            if (data.modifiedCount > 0) {
                refetch();
                toast.success(`Successfully Added An Admin`)
            }
        })
    }
    return (
            <tr>
               <th>{index + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                 <td>
                   {
                     role !== 'admin' ? <button className="btn btn-xs" onClick={makeAdmin}>Make Admin</button> : <button className="btn btn-xs btn-primary">Already Admin</button>
                    }
              </td>
               <td>
                   {
                       role ? <label  onClick={() => setDeletingAdmin(user)} htmlFor="handleDelete" className="btn btn-error text-white  " >Remove</label> :
                       <label  className="btn btn-error text-white" disabled>Remove</label>
                   }
                
                </td>
                        
          </tr>
    );
};

export default User;