import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { refreshToken } from "./api";
import { useRecoilState } from "recoil";
import { access } from "./atom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Board from "./components/board/Board";
import Viewer from "./components/board/Viewer";
import Home from "./Home";

function App() {
  const [activeUser, setActiveUser] = useRecoilState(access);
  useEffect(() => {
    const access = localStorage.getItem("Access");
    if (access) {
      const token = { token: access };
      refreshToken(token);
      setActiveUser(() => true);
    }
  }, [setActiveUser]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={activeUser ? <Home /> : <Login />} />
        <Route path="/signup" element={activeUser ? <Home /> : <Signup />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:id" element={<Viewer />} />
      </Routes>
    </Router>
  );
}

export default App;
