import React from "react";

import { useState } from "react";
import { login } from "../../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = {
      email,
      password,
    };
    console.log(login(body));
    navigate("/");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };
  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="email"
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={onChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
