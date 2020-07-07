import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  //   // borderRadius: 3,
  //   // border: 0,
  //   // color: "white",
  //   // height: 20,
  //   // padding: "0px",
  //   // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  // },
  // label: {
  //   textTransform: "capitalize",
  // },
  // color: {
  //   colorPrimary: "red",
  // },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src="./logo.png" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
