import { useState } from "react";
import { signup } from "../api";

const Signup = () => {
  const EMAIL = "email";
  const PASSWORD = "password";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onUserInfoSumbit = (event) => {
    event.preventDefault();
    const userInfo = { email, password };
    signup(userInfo);
  };

  const onUserInfoChange = (event) => {
    const { name, value } = event.target;
    if (name === EMAIL) {
      setEmail(value);
    }
    if (name === PASSWORD) {
      setPassword(value);
    }
  };
  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={onUserInfoSumbit}>
        <input
          name="email"
          onChange={onUserInfoChange}
          type="text"
          placeholder="email"
        />
        <input
          name="password"
          onChange={onUserInfoChange}
          type="text"
          placeholder="password"
        />
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
