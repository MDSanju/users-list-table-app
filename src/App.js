import React from "react";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Pages/Users/Users";
import NoMatch from "./Pages/NoMatch/NoMatch";
import "./App.css";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
