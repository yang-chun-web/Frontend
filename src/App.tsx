import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { refreshToken } from "./api";
import { useRecoilState } from "recoil";
import { access } from "./atom";
import Login from "./Routes/auth/Login";
import Signup from "./Routes/auth/Signup";
import Write from "./Routes/board/Write";
import Viewer from "./Routes/board/Viewer";
import Home from "./Home";
import Modify from "./Routes/board/Modify";

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
        <Route path="/write" element={<Write />} />
        <Route path="/board/:id" element={<Viewer />} />
        <Route path="/modify/:id" element={<Modify />} />
      </Routes>
    </Router>
  );
}

export default App;
