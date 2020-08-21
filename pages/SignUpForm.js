// import React from "react";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";

// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";

// import { IconButton } from "@material-ui/core";
// import Icon from "@material-ui/core/Icon";
// import { loadCSS } from "fg-loadcss";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   back: {
//     backgroundColor: "#220E1A",
//     borderRadius: "5px",
//     color: "white",
//   },

//   form: {
//     width: "70%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   input1: {
//     background: "white",
//     borderRadius: "25px",
//     color: "white",
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     borderRadius: "25px",
//   },
//   buttonGroup: {
//     borderRadius: "50px",
//     margin: theme.spacing(2, 0, 2, 0),
//   },
// }));

// export default function SignUpForm() {
//   const classes = useStyles();

//   React.useEffect(() => {
//     const node = loadCSS(
//       "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
//       document.querySelector("#font-awesome-css")
//     );

//     return () => {
//       node.parentNode.removeChild(node);
//     };
//   }, []);

//   return (
//     <Container maxWidth="sm" className={classes.back}>
//       <div className={classes.paper}>

//           <Grid
//             container
//             direction="column"
//             justify="center"
//             alignItems="center"
//           >
//             <Grid item xs>
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Stay signed in"
//               />
//             </Grid>
//             <Grid item>
//               <Button
//                 type="submit"
//                 medium
//                 variant="contained"
//                 color="primary"
//                 className={classes.submit}
//               >
//                 Sign In
//               </Button>
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>

//             <Grid item>
//               <h3 align="center">Or Via</h3>

//               <Link>
//                 <IconButton disabled={true}>
//                   {" "}
//                   <Icon className="fab fa-facebook" color="primary" />
//                 </IconButton>
//               </Link>
//               <Link>
//                 <IconButton>
//                   {" "}
//                   <Icon className="fab fa-google" color="primary" />
//                 </IconButton>
//               </Link>
//               <Link>
//                 <IconButton>
//                   <Icon className="fab fa-windows" color="primary" />
//                 </IconButton>
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//     </Container>
//   );
// }

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

export default function SignUpForm() {
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
            placeholder="Email"
          />

          <TextField
            className={classes.input1}
            margin="normal"
            required
            fullWidth
            id="Username"
            name="Username"
            autoFocus
            variant="filled"
            placeholder="Username"
          />
          <TextField
            className={classes.input1}
            margin="normal"
            required
            fullWidth
            id="passwrod"
            name="password"
            autoFocus
            variant="filled"
            placeholder="Password"
          />
          <TextField
            className={classes.input1}
            margin="normal"
            required
            fullWidth
            id="Repeat password"
            name="password"
            autoFocus
            variant="filled"
            placeholder="Repeat password"
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
