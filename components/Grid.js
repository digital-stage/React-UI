import React from "react";
import { Col, Row, Card, CardGroup, CardColumns, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGuitar,
  faUserCircle,
  faVolumeUp,
  faMicrophoneAlt,
  faSignOutAlt,
  faVideo,
  faCommentAlt,
  faMusic,
  faDrawPolygon,
  faUserPlus,
  faUsers,
  faBuromobelexperte,
} from "@fortawesome/free-solid-svg-icons";
export default function Grid() {
  return (
    <>
      <CardColumns>
        <Card>
          <Card.Img variant="top" src="/img1.png" />
          {
            <FontAwesomeIcon
              className="fontAwesome"
              icon={faGuitar}
              size="3x"
            />
          }
          <Card.Footer>
            <div className="footerDiv">
              <FontAwesomeIcon icon={faUserCircle} color="white" />
              <p>Mary swifton87</p>
              <FontAwesomeIcon icon={faVolumeUp} color="white" />
              <Form>
                <Form.Control type="range" />
              </Form>
            </div>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/img3.png" />
          {
            <FontAwesomeIcon
              className="fontAwesome"
              icon={faGuitar}
              size="3x"
            />
          }
          <Card.Footer>
            <div className="footerDiv">
              <FontAwesomeIcon icon={faUserCircle} color="white" />
              <p>Mary swifton87</p>
              <FontAwesomeIcon icon={faVolumeUp} color="white" />
              <Form>
                <Form.Control type="range" />
              </Form>
            </div>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src="/img2.png" />
          {
            <FontAwesomeIcon
              className="fontAwesome"
              icon={faGuitar}
              size="3x"
            />
          }
          <Card.Footer>
            <div className="footerDiv">
              <FontAwesomeIcon icon={faUserCircle} color="white" />
              <p>Mary swifton87</p>
              <FontAwesomeIcon icon={faVolumeUp} color="white" />
              <Form>
                <Form.Control type="range" />
              </Form>
            </div>
          </Card.Footer>
        </Card>
      </CardColumns>
    </>
  );
}
