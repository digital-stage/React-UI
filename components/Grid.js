import React from "react";
import { Col, Row, Card, CardGroup, CardColumns, Form } from "react-bootstrap";

export default function Grid() {
  return (
    <>
      <CardColumns>
        <Card>
          <Card.Img variant="top" src="/img1.png" />
          <Card.Body>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="bottomDiv">
              <span>
                <Form>
                  <Form.Control type="range" />
                </Form>
              </span>
            </div>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/img3.png" />
          <Card.Body>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer className="card-footer"></Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src="/img2.png" />
          <Card.Body>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </CardColumns>
    </>
  );
}
