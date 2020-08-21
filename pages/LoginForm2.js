import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

import "../styles/main.scss";

import Grid from "@material-ui/core/Grid";
import { Button, Box } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  h: {
    color: "white",
    width: "",
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
    <Box className="body_color">
      <Grid container direction="column" justify="center" alignItems="center">
        <Box pt={4}>
          <Grid item>
            <img src="./logo.png" />
          </Grid>
        </Box>
        <Box pt={2}>
          <Typography variant="h1" style={{ color: "white" }}>
            Welcome
          </Typography>
        </Box>

        <Box mt={2} className="root-container">
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
        </Box>
      </Grid>
      <Box mt={5} display="flex" justifyContent="center" variant="h5">
        <small>
          Enter stage ID to join as Guest {new Date().getFullYear()}
        </small>
      </Box>
    </Box>
  );
}
