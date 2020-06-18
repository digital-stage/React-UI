import React, { Component } from "react";
// Importing Sass with Bootstrap CSS
import "../styles/main.scss";

import { Container, Row } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Grid from "../components/Grid";
import ToolBar from "../components/ToolBar";

export default class Index extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <Grid />
          <ToolBar />
        </Container>
      </>
    );
  }
}
