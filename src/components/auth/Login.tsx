import React from "react";
import { login } from "../../api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface LoginInfo {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginInfo>();
  const onValid = (data: LoginInfo) => {
    login(data)
      .then(() => navigate("/"))
      .catch(() => navigate("/login"));
  };
  return (
    <div>
      <h1>Log In</h1>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", { required: "Email is Required" })}
          placeholder="email"
        />
        <input
          {...register("password", { required: "Password is Required" })}
          placeholder="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
