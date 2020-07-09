import React, { useState } from "react";
import {
    Navbar,
    Nav,
    Collapse,
    NavLink,
    NavbarBrand,
    NavbarToggler,
    NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Zomato Apps</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/">
                            Register
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/login">
                            Login
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}
