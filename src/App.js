import React from "react";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Pages/Users/Users";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Login from "./Pages/Login/Login/Login";
import Registration from "./Pages/Login/Registration/Registration";
import UserDetails from "./Pages/UserDetails/UserDetails";
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
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route
              path="/user/:userId"
              element={
                <PrivateRoute>
                  <UserDetails />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
