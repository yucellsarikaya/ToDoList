import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from 'react-router-dom'

export default class Navi extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/">To do list</Link>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                <Link to="/addNote">Add note</Link>
                </NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
