import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { access } from "./atom";
import { logout } from "./api";
import List from "./components/board/List";

const Home = () => {
  const [activeUser, setActiveUser] = useRecoilState(access);
  const onLogoutClick = () => {
    logout().then(() => {
      localStorage.clear();
      setActiveUser(() => false);
    });
  };

  return (
    <div>
      <div>
        {activeUser ? (
          <>
            <button onClick={onLogoutClick}>Logout</button>
            <Link to={"/board"}>
              <button>Write</button>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <button>Login</button>
            </Link>
            <Link to={"/signup"}>
              <button>Signup</button>
            </Link>
          </>
        )}
      </div>
      <List />
    </div>
  );
};

export default Home;
