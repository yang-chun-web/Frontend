import axios from "axios";

export const login = async (body) => {
  const response = await axios.post("/api/login", body);
  console.log(response);
};

export const signup = async (body) => {
  const response = await axios.post("/api/signup", body);
  console.log(response);
};

export const logout = async () => {
  const response = await axios.post("/api/logout");
  console.log(response);
};

export const check = async () => {
  const response = await axios.get("/api/check");
  console.log(response);
};

export const writeOnTheBoard = async (body) => {
  const response = await axios.post("/api/write", body);
  console.log(response);
};
