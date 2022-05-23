import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Button, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { FcGoogle, FcHome } from "react-icons/fc";
import { FormCard, LoginFormImg, LoginPage } from "../../styles/Users.styles";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { googleAuthMethod } = useAuth();
  const location = useLocation();
  const redirectUriNavigate = useNavigate();
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    googleAuthMethod(location, redirectUriNavigate);
  };
  const onSubmit = (data) => console.log(data);

  const backToHome = () => {
    navigate("/");
  };

  const timeOutForRedirectToRegPage = () => {
    setTimeout(reg, 1000);
  };

  const reg = () => {
    navigate("/registration");
  };
  return (
    <div>
      <LoginPage>
        <LoginFormImg
          src="https://i.ibb.co/VtpwFnK/login-removebg-preview.png"
          alt=""
        />
        <FormCard>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src="https://i.ibb.co/gdVdC8c/png-clipart-login-computer-icons-login-s-blue-text-thumbnail-removebg-preview.png"
              style={{ width: "40%" }}
              alt=""
            />
            <br />
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
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
              <div style={{ display: "flex", justifyContent: "center" }}>
                <FormControlLabel
                  value="start"
                  onClick={timeOutForRedirectToRegPage}
                  control={<Checkbox />}
                  label="Are you a new user?"
                  labelPlacement="start"
                />
              </div>
              <br />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                endIcon={<AiOutlineLogin />}
              >
                Login
              </Button>
            </form>
            <br />
            <div>
              <p>------------ OR ------------</p>
            </div>
            <br />
            <Button
              variant="outlined"
              sx={{ width: "300px" }}
              startIcon={<FcGoogle />}
              onClick={loginWithGoogle}
            >
              sign in with google
            </Button>
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
        </FormCard>
      </LoginPage>
    </div>
  );
};

export default Login;
