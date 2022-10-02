import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { access } from "./atom";
import { logout } from "./api";
import List from "./Routes/board/List";
import Header from "./components/Header";

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
            <Header />
          </>
        )}
      </div>
      <List />
    </div>
  );
};

export default Home;
