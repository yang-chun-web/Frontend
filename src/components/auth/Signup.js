import { useState } from "react";
import { signup } from "../../api";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const userInfo = { email, password };
    signup(userInfo);
  };
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          name="email"
          placeholder="email"
          type="text"
        />
        <input
          onChange={onChange}
          name="password"
          placeholder="password"
          type="text"
        />
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
