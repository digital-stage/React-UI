import React from "react";
import "../styles/main.scss";

import Grid from "@material-ui/core/Grid";
import { Button, Box } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headingColor: {
    color: "white",
  },
  submit: {
    borderRadius: "25px",
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Box component="body" className="body_color">
      <Grid container direction="column" justify="center" alignItems="center">
        <Box mt={3}>
          <Grid item>
            <img src="./logo.png" />
          </Grid>
          <Box mt={2}>
            <Typography variant="h6" className={classes.headingColor}>
              Your digital stage for art,music <br /> and theatre ensembles
            </Typography>
          </Box>
        </Box>
        <Box mt={12}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h2" className={classes.headingColor}>
              Welcome Back
            </Typography>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className={classes.submit}
                href="/LoginForm2"
              >
                <a>Sign in</a>
              </Button>
              <br />
              <small className={classes.headingColor}>
                sign into account or <br />
                create a new account
              </small>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Box display="flex" mt={12} justifyContent="center" mb={0}>
        <small>Version 0.00001 {new Date().getFullYear()}</small>
      </Box>
    </Box>
  );
}
