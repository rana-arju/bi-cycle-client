import { useEffect, useState } from "react"

const useToken = (user) => {
const [token, setToken] = useState('');
useEffect(() => {
const email = user?.user?.email;
const name = user?.user?.displayName;
const image = user?.user?.photoURL;
const currentUser = {email, name, image};
if (email) {
    fetch(`https://by-cycle.onrender.com/user/${email}`,{
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        const accessToken = data.token;
        localStorage.setItem('accessToken', accessToken);
        setToken(accessToken)
    })
}

},[user]);
return [token];
}
export default useToken;