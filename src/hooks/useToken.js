import { useEffect, useState } from 'react';

const useToken = user => {
    const [token , setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = {email: email};
        if (currentUser) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                const accessToken = data.token;
                setToken(accessToken)
                localStorage.setItem('accessToekn', accessToken)
            })
        }
        
    },[user])
    return [token];
};

export default useToken;