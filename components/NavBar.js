import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <span className="d-inline-block align-top logo pr-4" /> Digital Stage
        </Navbar.Brand>
      </Navbar>
    </>
  );
};
export default NavBar;
