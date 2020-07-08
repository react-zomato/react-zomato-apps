import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

function Footer(props) {
  return (
    <Container>
      <hr />
      <Row>
        <Col xs="6">
          <h5>Feature</h5>
          <ListGroup flush>
            <ListGroupItem disabled tag={Link} to="/">
              List Restaurant
            </ListGroupItem>
            <ListGroupItem disabled tag={Link} to="/">
              Detail Restaurant
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs="6">
          <h5>Teechnology Used</h5>
          <ListGroup flush>
            <ListGroupItem disabled tag={Link} to="/">
              React JS
            </ListGroupItem>
            <ListGroupItem disabled tag={Link} to="/">
              Reactstrap
            </ListGroupItem>
            <ListGroupItem disabled tag={Link} to="/">
              Redux
            </ListGroupItem>
            <ListGroupItem disabled tag={Link} to="/">
              MockAPI
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col
          style={{
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "13px", marginTop: "5px" }}>
            Copyright © React-Zomato 2020.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
