import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "./api";
import List from "./components/board/List";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const onLogoutClick = () => {
    logout().then(() => {
      localStorage.clear();
      setLoading(true);
    });
  };
  useEffect(() => {
    const access = localStorage.getItem("Access");
    if (access) {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <>
            <Link to={"/login"}>
              <button>Login</button>
            </Link>
            <Link to={"/signup"}>
              <button>Signup</button>
            </Link>
          </>
        ) : (
          <>
            <button onClick={onLogoutClick}>Logout</button>
            <Link to={"/board"}>
              <button>Write</button>
            </Link>
          </>
        )}
      </div>
      <List />
    </div>
  );
};

export default Home;
