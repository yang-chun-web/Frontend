import React from "react";
import { useForm } from "react-hook-form";
import { signup } from "../../api";

interface UserInfo {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<UserInfo>();

  const onValid = (data: UserInfo) => {
    if (data.password !== data.confirmPassword) {
      setError(
        "confirmPassword",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    } else {
      const userInfo = { email: data.email, password: data.password };
      signup(userInfo);
    }
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9]+$/,
              message: "이메일 주소가 올바르지 않습니다.",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("password", {
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{10,}$/,
              message: "적합한 비밀번호가 아닙니다.",
            },
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("confirmPassword", {
            required: "Confirm Password is required",
          })}
          placeholder="confirmPassword"
        />
        <span>{errors.confirmPassword?.message}</span>
        <button>등록</button>
      </form>
    </div>
  );
};

export default Signup;
