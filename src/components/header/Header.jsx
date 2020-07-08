import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Collapse,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand tag={Link} to="/">
          Zomato
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem></NavItem>
            <NavItem></NavItem>
          </Nav>
          <NavbarText>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/login">
                  Signin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/register">
                  Signup
                </NavLink>
              </NavItem>
            </Nav>
          </NavbarText>
        </Collapse>
      </Container>
    </Navbar>
  );
}
