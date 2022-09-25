import { Link } from "react-router-dom";
import { logout, check } from "./api";

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
      <h1>Welcome Home !!</h1>
    </div>
  );
};

export default Home;
