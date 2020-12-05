import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

const MainNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="main--navbar" expand="md">
        <NavbarBrand className="nav--header" href="/">Gnophy</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav--links" href="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav--links" href="/outings">Outings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav--links" href="/sightings">Sightings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav--links" href="/about">About</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Log Out</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
