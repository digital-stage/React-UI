import React from "react";
import {
  Navbar,
  ButtonGroup,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import {} from "react-bootstrap";

export default function ToolBar() {
  return (
    <>
      <ButtonGroup
        aria-label="Basic example"
        className="toolBar"
        style={{ width: "100%" }}
      >
        <Button variant="secondary">Left</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Right</Button>
      </ButtonGroup>
    </>
  );
}
