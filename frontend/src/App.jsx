// import Header from "./components/Header";
// // import UserCard from "./components/UserCard";
// import Counter from "./components/Counter";
// import LoginForm from "./components/LoginForm";

// import { Routes, Route, Link } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/Profile";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <nav>
//         <Link to="/login">Login</Link>
//         <Link to="/register">Register</Link>
//         <Link to="/dashboard">Dashboard</Link>
//         <Link to="/profile">Profile</Link>
//       </nav>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </>
//   );
// }

import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Profile from "./components/Profile";

function App() {
  const [username, setUsername] = useState("Alex");

  return (
    <>
      <Navbar username={username} />
      <Profile setUsername={setUsername} />
    </>
  );
}

export default App;
