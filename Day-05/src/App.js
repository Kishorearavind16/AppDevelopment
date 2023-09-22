import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { About, Error, Home, ProductList } from "./Pages/index.js";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [userstate, setUserState] = useState({});
  
  const handleLogin = () => {
    setUserState({ _id: 1, fname: "John" });
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/profile" element={<Profile user={userstate} />} />
          <Route
            path="/"
            element={
              userstate && userstate._id ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
