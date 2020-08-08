// import React from "react";

// import Button from "@material-ui/core/Button";

// export default function Welcome() {
//   return (
//     <div className="abc">
//       <div className="center">
//         <div>
//           <img src="./logo.png" />
//           <p>
//             Your digital stage for art,music <br /> and theatre ensembles
//           </p>
//         </div>

//         <div>
//           <h1>Welcome Back</h1>

//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "../styles/main.scss";
import Link from "next/link";

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
  h: {
    color: "white",
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Box component="body" className="body_color">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <img src="./logo.png" />
        </Grid>
        <Typography variant="h1" className={classes.h}>
          Welcome
        </Typography>
        <Grid item>
          <Button variant="contained" color="primary">
            <Link href="/LoginForm2">
              <a>Sign in</a>
            </Link>
          </Button>
          <br />
          <br />

          <small>
            sign into account or <br />
            create a new account
          </small>
        </Grid>
      </Grid>

      <Box mt={10} display="flex" justifyContent="center" variant="h5">
        <small>
          Enter stage ID to join as Guest {new Date().getFullYear()}
        </small>
      </Box>
    </Box>
  );
}
