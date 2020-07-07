import React from "react";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
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
      <Grid item xs={4}>
        <Button>
          <span className="fontAwesomeToolBar">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <br />
            <small>Exit Stage</small>
          </span>
        </Button>
        <Button>
          <span className="fontAwesomeToolBar">
            <FontAwesomeIcon icon={faMicrophoneAlt} />
            <br />

            <small>Mute</small>
          </span>
        </Button>

        <Button>
          <span className="fontAwesomeToolBar">
            <FontAwesomeIcon className="fontAwesomeToolBar" icon={faVideo} />
            <br />
            <small>video</small>
          </span>
        </Button>
      </Grid>

      <Grid item xs={4}>
        <Button>
          <span className="fontAwesomeToolBar">
            <FontAwesomeIcon
              className="fontAwesomeToolBar"
              icon={faCommentAlt}
            />

            <br />
            <small>Chat</small>
          </span>
        </Button>

        <Button>
          <span className="fontAwesomeToolBar">
            <FontAwesomeIcon className="fontAwesomeToolBar" icon={faMusic} />
            <br />
            <small>Metronom</small>
          </span>
        </Button>
      </Grid>

      <Grid item xs={4}>
        <Button>
          <span className="fontAwesomeToolBar">
            <FontAwesomeIcon className="fontAwesomeToolBar" icon={faUserPlus} />
            <br />
            <small>Invite User</small>
          </span>
        </Button>

        <Button>
          <span className="fontAwesomeToolBar">
            <FontAwesomeIcon className="fontAwesomeToolBar" icon={faUsers} />
            <br />
            <small>Stage settings</small>
          </span>
        </Button>
      </Grid>
    </>
  );
}
