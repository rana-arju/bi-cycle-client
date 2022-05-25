import React from 'react';
import { toast } from 'react-toastify';

const User = ({user, refetch}) => {
        const {email, role} = user;
        const makeAdmin = () => {
        const {email }= user;
        fetch(`https://arcane-inlet-91838.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
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
               <th>1</th>
                <td>{email}</td>
                 <td>
                   {
                     role !== 'admin' ? <button className="btn btn-xs" onClick={makeAdmin}>Make Admin</button> : <button className="btn btn-xs btn-primary">Already Admin</button>
                    }
              </td>
               <td>
               <button className="btn btn-xs btn-error">Remove User</button>
               </td>
                        
          </tr>
    );
};

export default User;