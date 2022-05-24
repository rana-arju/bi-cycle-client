import React from 'react';

const User = (user) => {
    return (
        <>
            <li className='my-2'>Full Name: <span className='font-bold text-accent'>{user?.name}</span></li>
                        <li className='my-2'>User Name: <span className='font-bold text-accent'>{user?.userName ? user?.userName : "add user name"}</span></li>
                        <li className='my-2'>Email: <span className='font-bold text-accent'>{user?.email}</span></li>
                        <li>Phone Number: <span className='font-bold text-accent'>{user?.phone ? user?.phone : "018*****"}</span></li>
                        <li>Location: <span className='font-bold text-accent'>{user?.division}</span> || <span>{user?.distic}</span></li>
                        <li>Linkedin: <button className='btn btn-primary  my-3 text-white'>{user?.linkedin ? <a href={user?.linkedin}>Linkdin</a> : <a href="https://www.linkedin.com/ranaarju">Linkdin</a>}</button></li>
                        <li>Github: <button className='btn btn-primary  my-3 text-white '>{user?.linkedin ? <a href={user?.linkedin}>Linkdin</a> : <a href="https://www.linkedin.com/ranaarju">Linkdin</a>}</button></li>
        </>
    );
};

export default User;