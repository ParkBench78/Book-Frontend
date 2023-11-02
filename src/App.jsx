import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Booklist from "./components/Booklist";
import UserList from "./components/UserList";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <div id="container">
        <div id="navbar">
          <h1 className="spacer left-margin">Capstone Book Club</h1>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/booklist">
            Book List
          </Link>
          <Link className="link" to="/users">
            Users
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
          <Link className="link" to="/register">
            Register
          </Link>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booklist" element={<Booklist />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
