import axios from "axios";
const client = axios.create();

export const signup = (userInfo) => {
    client.post('/api/signup', userInfo).then((res)=>console.log(res));
}

export const textRegist = (textInfo) => {
    client.post('/api/textRegist', textInfo).then((res)=>console.log(res))
}