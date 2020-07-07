import React, { Component } from "react";

import "../styles/main.scss";

import NavBar from "../components/NavBar";

import SpacingGrid from "../components/SpacingGrid";

import ToolBar from "../components/ToolBar";
import { Grid, Container } from "@material-ui/core";
import Metronome from "../components/Metronome";

export default class Index extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <Grid container justify="center">
            <Metronome />
          </Grid>
          <Grid container justify="center">
            <SpacingGrid />
          </Grid>

          <Grid container spacing={0} direction="row" alignItems="center">
            <ToolBar />
          </Grid>
        </Container>
      </>
    );
  }
}
