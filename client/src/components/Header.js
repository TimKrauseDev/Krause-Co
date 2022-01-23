import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <header id="Header">
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">Krause Co</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Shop"
                id="collasible-nav-dropdown"
                menuVariant="dark"
                active="false"
              >
                <LinkContainer to="/shop">
                  <NavDropdown.Item>All</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/shop/1">
                  <NavDropdown.Item>Fruits</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/shop/2">
                  <NavDropdown.Item>Herbs</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/shop/3">
                  <NavDropdown.Item>Flowers</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/shop/4">
                  <NavDropdown.Item>Cover Crops</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/shop/5">
                  <NavDropdown.Item>Vegetables</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <Nav.Link href="/">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
