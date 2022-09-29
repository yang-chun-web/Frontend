import axios from "axios";

interface LoginInfo {
  email: string;
  password: string;
}

interface SignupInfo {
  email: string;
  password: string;
}

interface TextInfo {
  title: string;
  contents?: string;
}

export const login = async (body: LoginInfo) => {
  const response = await axios.post("/api/login", body);
  console.log(response);
};

export const signup = async (body: SignupInfo) => {
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

export const writeOnTheBoard = async (body: TextInfo) => {
  const response = await axios.post("/api/write", body);
  console.log(response);
};
