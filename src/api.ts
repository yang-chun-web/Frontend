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
  token: string | null;
}

interface TextCheck {
  id: string;
  token: string | null;
}

export const login = async (body: LoginInfo) => {
  const response = await axios.post("/api/login", body);
  const { data } = response;
  localStorage.setItem("Access", data);
};

export const signup = async (body: SignupInfo) => {
  const response = await axios.post("/api/signup", body);
  console.log(response);
};

export const logout = async () => {
  await axios.post("/api/logout");
};

export const check = async () => {
  try {
    const response = await axios.get("/api/check");
    return response;
  } catch (error) {
    return error;
  }
};

export const remove = async (body: TextCheck) => {
  await axios.post("/api/remove", body, {
    headers: { Authorization: body.token! },
  });
};

export const writeOnTheBoard = async (body: TextInfo) => {
  await axios.post("/api/write", body, {
    headers: { Authorization: body.token! },
  });
};

export const refreshToken = async (body: Object) => {
  try {
    const response = await axios.post("/api/refresh", body);
    const { data } = response;
    localStorage.setItem("Access", data);
  } catch {}
};
