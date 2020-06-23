import React from "react";
import {
  Navbar,
  ButtonGroup,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGuitar,
  faUserCircle,
  faVolumeUp,
  faMicrophoneAlt,
  faSignOutAlt,
  faVideo,
  faCommentAlt,
  faChartArea,
  faMusic,
  faDrawPolygon,
  faUserPlus,
  faUsers,
  faBuromobelexperte,
} from "@fortawesome/free-solid-svg-icons";

export default function ToolBar() {
  return (
    <>
      <ButtonGroup className="toolBar" style={{ width: "100%" }}>
        <Button>
          <span className="fontAwesomeToolBar">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <br /> Exit Stage
          </span>
        </Button>
        <Button>
          <span className="fontAwesomeToolBar">
            <FontAwesomeIcon icon={faMicrophoneAlt} />
            <br />
            Mute
          </span>
        </Button>

        <Button>
          <FontAwesomeIcon className="fontAwesomeToolBar" icon={faVideo} />
        </Button>

        <Button>
          <FontAwesomeIcon className="fontAwesomeToolBar" icon={faCommentAlt} />
        </Button>
        <Button>
          <FontAwesomeIcon className="fontAwesomeToolBar" icon={faMusic} />
        </Button>

        <Button>
          <FontAwesomeIcon className="fontAwesomeToolBar" icon={faUserPlus} />
        </Button>

        <Button>
          <FontAwesomeIcon className="fontAwesomeToolBar" icon={faUsers} />
        </Button>

        <Button>
          <FontAwesomeIcon
            className="fontAwesomeToolBar"
            icon={faUserCircle}
            style={{ color: "black" }}
          />
        </Button>
      </ButtonGroup>
    </>
  );
}
