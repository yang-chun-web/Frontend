import { useState } from "react";
import { signup, textRegist } from "./api";

function App() {
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

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onTextInfoChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    }
    if (name === "content") {
      setContent(value);
    }
  };
  const onTextSubmit = (event) => {
    event.preventDefault();
    const textInfo = { title, content };
    textRegist(textInfo);
    console.log(textInfo);
  };

  return (
    <div>
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
      <form onSubmit={onTextSubmit}>
        <input
          name="title"
          onChange={onTextInfoChange}
          type="text"
          placeholder="title"
        />
        <input
          name="content"
          onChange={onTextInfoChange}
          type="text"
          placeholder="content"
        />
        <button>등록</button>
      </form>
    </div>
  );
}

export default App;
