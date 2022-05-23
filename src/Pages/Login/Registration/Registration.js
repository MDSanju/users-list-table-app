import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaRegistered } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import {
  RegFormCard,
  LoginFormImg,
  RegistrationPage,
} from "../../styles/Users.styles";

const Registration = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => console.log(data);

  const backToHome = () => {
    navigate("/");
  };

  const timeOutForRedirectToLoginPage = () => {
    setTimeout(loginPageRedirect, 1000);
  };

  const loginPageRedirect = () => {
    navigate("/login");
  };
  return (
    <div>
      <RegistrationPage>
        <RegFormCard>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src="https://i.ibb.co/Zx2znrF/Untitled-design-5.png"
              style={{ width: "75%" }}
              alt=""
            />
            <br />
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                type="text"
                id="outlined-textarea"
                label="Your Name"
                placeholder="John Doe"
                multiline
                sx={{ width: "300px" }}
                {...register("displayName")}
                required
              />
              <br />
              <br />
              <TextField
                type="email"
                id="outlined-textarea"
                label="Email"
                placeholder="Example@gmail.com"
                sx={{ width: "300px" }}
                {...register("email")}
                required
              />
              <br />
              <br />
              <TextField
                id="outlined-password-input"
                type="password"
                label="Password"
                placeholder="Your Password"
                sx={{ width: "300px" }}
                {...register("password")}
                required
              />
              <br />
              <br />
              <TextField
                id="outlined-password-input"
                type="password"
                label="Password Re-Type"
                placeholder="Re-Type Your Password"
                sx={{ width: "300px" }}
                {...register("passwordAgain")}
                required
              />
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <FormControlLabel
                  value="start"
                  onClick={timeOutForRedirectToLoginPage}
                  control={<Checkbox />}
                  label="Already registered?"
                  labelPlacement="start"
                />
              </div>
              <br />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                endIcon={<FaRegistered />}
              >
                registration
              </Button>
            </form>
            <br />
            <Button
              variant="outlined"
              sx={{ width: "300px" }}
              startIcon={<FcHome />}
              onClick={backToHome}
            >
              go back to home page
            </Button>
          </div>
          <br />
          <br />
          <br />
        </RegFormCard>
        <LoginFormImg src="https://i.ibb.co/tbJFRVP/regBg.jpg" alt="" />
      </RegistrationPage>
    </div>
  );
};

export default Registration;
