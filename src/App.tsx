import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Board from "./components/board/Board";
import Viewer from "./components/board/Viewer";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/board" element={<Home />} />
        <Route path="/board/:id" element={<Viewer />} />
      </Routes>
    </Router>
  );
}

export default App;
