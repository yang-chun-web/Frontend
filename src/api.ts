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
  try {
    const response = await axios.post("/api/login", body);
    return response;
  } catch (error) {
    return error;
  }
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
  try {
    const response = await axios.get("/api/check");
    return response;
  } catch (error) {
    return error;
  }
};

export const writeOnTheBoard = async (body: TextInfo) => {
  const response = await axios.post("/api/write", body);
  console.log(response);
};
