import React from "react";
import { Link } from "react-router-dom";
import { logout, check } from "./api";
import List from "./components/board/List";

const Home = () => {
  const onLogoutClick = () => {
    logout();
  };
  const onCheckClick = () => {
    check();
  };

  return (
    <div>
      <div>
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
        <Link to={"/signup"}>
          <button>Signup</button>
        </Link>
        <Link to={"/board"}>
          <button>Board</button>
        </Link>
        <button onClick={onLogoutClick}>Logout</button>
        <button onClick={onCheckClick}>Check</button>
      </div>
      <List />
    </div>
  );
};

export default Home;
