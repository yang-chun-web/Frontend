import axios from "axios";

export const login = (body) => {
  axios
    .post("/api/login", body)
    .then((res) => console.log(res))
    .catch();
};

export const signup = (body) => {
  axios.post("/api/signup", body).then((res) => console.log(res));
};

export const logout = async () => {
  const res = await axios.post("/api/logout");
  return res;
};

export const check = async () => {
  const res = await axios.get("/api/check");
  console.log(res);
  return res;
};

export const createText = (body) => {
  axios.post("/api/createText", body).then((res) => console.log(res));
};
