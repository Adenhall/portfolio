import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavMenu(props) {
  return (
    <div className="navi-bar">
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg={props.navBg}
        variant="dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <Nav activeKey="/home">
            <Nav.Item>
              <Nav.Link className="vertical" href="/home">
                <span className="text">Home</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="horizontal" href="/cv">
                <span className="text">About me</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="vertical" href="/portfolio">
                <span className="text">Portfolio</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="horizontal" href="/contact">
                <span className="text">Hit me up</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
