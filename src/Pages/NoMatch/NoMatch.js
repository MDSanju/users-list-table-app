import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ width: "50%" }}
          src="https://i.ibb.co/Fhjb1vH/404-1.png"
          alt=""
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={backToHome} variant="outlined">
          Back Home
        </Button>
      </div>
    </div>
  );
};

export default NoMatch;
