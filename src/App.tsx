import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { access } from "./atom";
import { useQuery } from "react-query";
import { refreshToken } from "./api";
import Login from "./Routes/auth/Login";
import Signup from "./Routes/auth/Signup";
import Write from "./Routes/board/Write";
import Viewer from "./Routes/board/Viewer";
import Home from "./Routes/Home";
import Edit from "./Routes/board/Edit";

function App() {
  const [activeUser, setActiveUser] = useRecoilState(access);
  const oldtoken = localStorage.getItem("Access");
  const token = { token: oldtoken };
  useQuery(["updateToken"], () => refreshToken(token), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: 2,
    refetchInterval: 60 * 60 * 1000 - 10 * 60 * 1000, // 50분
    refetchIntervalInBackground: true,
  });

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
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
