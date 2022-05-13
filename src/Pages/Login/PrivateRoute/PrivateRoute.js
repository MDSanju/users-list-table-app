import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40vh",
        }}
      >
        <ScaleLoader color={"#a3a3a3"} size={85} />
      </div>
    );
  }

  if (user.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
