import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { IconButton } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { loadCSS } from "fg-loadcss";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  back: {
    backgroundColor: "#220E1A",
    borderRadius: "5px",
    color: "white",
  },

  form: {
    width: "70%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  input1: {
    background: "white",
    borderRadius: "25px",
    color: "white",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: "25px",
  },
  buttonGroup: {
    borderRadius: "50px",
    margin: theme.spacing(2, 0, 2, 0),
  },
}));

export default function SignUpForm() {
  const classes = useStyles();

  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <Container maxWidth="sm" className={classes.back}>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField
            className={classes.input1}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            variant="filled"
          />

          <TextField
            className={classes.input1}
            margin="normal"
            required
            fullWidth
            id="Username"
            label="Username"
            name="Username"
            autoFocus
            variant="filled"
          />
          <TextField
            className={classes.input1}
            margin="normal"
            required
            fullWidth
            id="passwrod"
            label="password"
            name="password"
            autoFocus
            variant="filled"
          />
          <TextField
            className={classes.input1}
            margin="normal"
            required
            fullWidth
            id="Repeat password"
            label="Repeat password"
            name="password"
            autoFocus
            variant="filled"
          />
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs>
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
              <h3 align="center">Or Via</h3>

              <Link>
                <IconButton disabled={true}>
                  {" "}
                  <Icon className="fab fa-facebook" color="primary" />
                </IconButton>
              </Link>
              <Link>
                <IconButton>
                  {" "}
                  <Icon className="fab fa-google" color="primary" />
                </IconButton>
              </Link>
              <Link>
                <IconButton>
                  <Icon className="fab fa-windows" color="primary" />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
