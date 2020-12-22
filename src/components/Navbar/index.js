import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
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

import logo from '../../assets/images/nounNatureIcon.png';
import Experience from '../Experience';

const MainNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logMeOut = (e) => {
    e.preventDefault();
    window.sessionStorage.removeItem('ua');
    firebase.auth().signOut();
    window.location.href = '/';
  };

  const { user, experience } = props;
  return (
    <div>
      <Navbar className="main--navbar" expand="md">
      <NavbarBrand href="/" className="d-flex">
        <img className="main-logo" src={logo} alt="nature by Creative Mania from the Noun Project"/>
        <div className="nav--header">Gnophy</div>
      </NavbarBrand>
        <NavbarToggler onClick={toggle}/>
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
          <Experience experience={experience}/>
          <NavbarText>
          <div className="form-inline my-2 my-lg-0">
              {user && (
                <button
                  className="nav-link btn btn-danger"
                  onClick={logMeOut}
                >
                  Logout
                </button>
              )}
            </div>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
