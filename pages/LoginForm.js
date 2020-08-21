import React from "react";
import { useEffect } from "react";
import NoSsr from "@material-ui/core/NoSsr";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import BottomNavigation from "@material-ui/core/BottomNavigation";

import "../styles/main.scss";

import {
  Grid,
  Container,
  Checkbox,
  IconButton,
  FormControlLabel,
  TextField,
  Button,
  Link,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Icon from "@material-ui/core/Icon";
import { loadCSS } from "fg-loadcss";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";

import MicrosoftLogin from "react-microsoft-login";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "250px",
  },

  background: {
    backgroundColor: "#220E1A",
    borderRadius: "5px",
    color: "white",
  },

  form: {
    width: "auto", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  input1: {
    background: "white",
    borderRadius: "25px",
    color: "white",
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
    borderRadius: "25px",
  },
  buttonGroup: {
    borderRadius: "50px",
    margin: theme.spacing(2, 0, 2, 0),
  },
  root: {
    width: 50,
    backgroundColor: "#220E1A",
  },
}));

export default function SignIn() {
  const classes = useStyles();

  //Load Fonts awesome icons
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  //google facebook,Microsoft Login response
  const responseFacebook = (response) => {
    console.log(response);
  };
  const responseGoogle = (response) => {
    console.log(response);
  };

  const authHandler = (err, data) => {
    console.log(err, data);
  };

  return (
    <Container maxWidth="xm" className={classes.background}>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField
            className={classes.input1}
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoFocus
            variant="filled"
            placeholder="Username"
          />
          <TextField
            className={classes.input1}
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            placeholder="Password"
          />

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Stay signed in"
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                medium
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>

            <Grid item>
              <h3 align="center">Or Via</h3>{" "}
              <BottomNavigation className={classes.root}>
                <BottomNavigationAction
                  icon={
                    <FacebookLogin
                      appId="225241158739281"
                      autoLoad
                      callback={responseFacebook}
                      render={(renderProps) => (
                        <IconButton
                          color="primary"
                          onClick={renderProps.onClick}
                        >
                          <Icon className="fab fa-facebook" />
                        </IconButton>
                      )}
                    />
                  }
                />
                <BottomNavigationAction
                  icon={
                    <GoogleLogin
                      clientId="500452257814-peb71oi9612hv04svvfpvfrtch6pc5br.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <IconButton onClick={renderProps.onClick}>
                          {" "}
                          <Icon className="fab fa-google" color="primary" />
                        </IconButton>
                      )}
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  }
                />
                <BottomNavigationAction
                  icon={
                    <NoSsr>
                      <MicrosoftLogin
                        clientId="a973536f-eb3e-4fd9-9394-9f4194d69153"
                        authCallback={authHandler}
                        redirectUri="https://localhost:3000/"
                        className={classes.winIcon}
                        children={
                          <IconButton>
                            <Icon className="fab fa-windows" color="primary" />
                          </IconButton>
                        }
                      />
                    </NoSsr>
                  }
                />
              </BottomNavigation>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
