import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { refreshToken } from "./api";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Board from "./components/board/Board";
import Viewer from "./components/board/Viewer";
import Home from "./Home";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const access = localStorage.getItem("Access");
    if (access) {
      const token = { token: access };
      refreshToken(token);
      setLoading(false);
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={loading ? <Login /> : <Home />} />
        <Route path="/signup" element={loading ? <Signup /> : <Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:id" element={<Viewer />} />
      </Routes>
    </Router>
  );
}

export default App;
