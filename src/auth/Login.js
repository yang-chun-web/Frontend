import { useState } from "react";
import { login } from "../api";

const Login = () => {
  const EMAIL = "email";
  const PASSWORD = "password";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onTextInfoChange = (event) => {
    const { name, value } = event.target;
    if (name === EMAIL) {
      setEmail(value);
    }
    if (name === PASSWORD) {
      setPassword(value);
    }
  };
  const onTextSubmit = (event) => {
    event.preventDefault();
    const userInfo = { email, password };
    login(userInfo);
    console.log(userInfo);
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onTextSubmit}>
        <input
          name="email"
          onChange={onTextInfoChange}
          type="text"
          placeholder="email"
        />
        <input
          name="password"
          onChange={onTextInfoChange}
          type="text"
          placeholder="password"
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
