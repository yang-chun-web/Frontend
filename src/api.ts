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

interface Token {
  token: string | null;
}

export const refreshToken = async (body: Token) => {
  try {
    const response = await axios.post("/api/refresh", body);
    const { data } = response;
    localStorage.setItem("Access", data);
  } catch (error) {
    return error;
  }
};

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

export const editTheText = async (text: any) => {
  await axios.put("/api/edit", text);
};

export const test = async (formData: any, token: any) => {
  await axios.post("/api/test", formData, {
    headers: { Authorization: token },
  });
};
