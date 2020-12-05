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

// class MainNavbar extends Component {
//   const [isOpen, setIsOpen] = useState(false);
//   toggle = () => setIsOpen(!isOpen);

//   logMeOut = (e) => {
//     e.preventDefault();
//     firebase.auth().signOut();
//   };

//   render() {
//     const { user } = this.props;

//     return (
//       <div>
//         <Navbar className="main--navbar" expand="md">
//           <NavbarBrand className="nav--header" href="/">Gnophy</NavbarBrand>
//           <NavbarToggler onClick={toggle} />
//           <Collapse isOpen={isOpen} navbar>
//             <Nav className="mr-auto" navbar>
//               <NavItem>
//                 <NavLink className="nav--links" href="/profile">Profile</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink className="nav--links" href="/outings">Outings</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink className="nav--links" href="/sightings">Sightings</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink className="nav--links" href="/about">About</NavLink>
//               </NavItem>
//             </Nav>
//             <NavbarText>
//             <div className="form-inline my-2 my-lg-0">
//                 {user && (
//                   <button
//                     className="nav-link btn btn-danger"
//                     onClick={this.logMeOut}
//                   >
//                     Logout
//                   </button>
//                 )}
//               </div>
//             </NavbarText>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default MainNavbar;

const MainNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  const { user } = props;
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
