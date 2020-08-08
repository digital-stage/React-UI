import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

import "../styles/main.scss";

import Grid from "@material-ui/core/Grid";
import { Button, Box } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import { spacing } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";
import { setNestedObjectValues } from "formik";

const useStyles = makeStyles((theme) => ({
  h: {
    color: "white",
  },
}));

export default function SignIn() {
  const [LoginOpen, setLoginOpen] = useState(true);
  const [SignupOpen, setSignupOpen] = useState(false);
  const classes = useStyles();

  const showLoginBox = () => {
    setLoginOpen(true);
    setSignupOpen(false);
  };

  const showRegisterBox = () => {
    setSignupOpen(true);
    setLoginOpen(false);
  };

  return (
    <Box component="body" className="body_color">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <img src="./logo.png" />
        </Grid>
        <Typography variant="h1" style={{ color: "white" }}>
          Welcome
        </Typography>
        <Grid item></Grid>
      </Grid>

      <div className="root-container">
        <div style={{ background: "#220e1a", borderRadius: "5px" }}>
          <div className="box-controller">
            <div
              className={
                "controller " + (LoginOpen ? "selected-controller" : "")
              }
              onClick={() => showLoginBox()}
            >
              SignIn
            </div>
            <div
              className={
                "controller " + (SignupOpen ? "selected-controller" : "")
              }
              onClick={() => showRegisterBox()}
            >
              SignUp
            </div>
          </div>
          <Box>
            {LoginOpen && <LoginForm />}
            {SignupOpen && <SignUpForm />}
          </Box>
        </div>
      </div>

      <Box mb={0} display="flex" justifyContent="center" variant="h5">
        <small>
          Enter stage ID to join as Guest {new Date().getFullYear()}
        </small>
      </Box>
    </Box>
  );
}
