import { useState } from "react";
import { login } from "./signup";

function App() {
  const EMAIL = "email";
  const PASSWORD = "password";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSumbit=(event)=>{
    event.preventDefault();
    const userInfo = {email, password};
    login(userInfo);
  }

  const onChange = (event)=>{
    const {name, value} = event.target;
    if(name === EMAIL) {
      setEmail(value);
    }
    if(name === PASSWORD) {
      setPassword(value);
    }
  }
  return (
    <div>
     <form onSubmit={onSumbit}>
      <input name="email" onChange={onChange} type="text" placeholder="email"/>
      <input name="password" onChange={onChange} type="text" placeholder="password"/>
      <button>Submit</button>
     </form>
    </div>
  );
}

export default App;
