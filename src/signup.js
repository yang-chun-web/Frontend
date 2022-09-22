import axios from "axios";
const client = axios.create();

export const login = (userInfo) => {
    client.post('/api/signup', userInfo).then((res)=>console.log(res));
}