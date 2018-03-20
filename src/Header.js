import React from "react";
import "./Home.css";
import { Nav, NavItem } from "react-bootstrap";

export default class Header extends React.Component {
  render() {
    return (
        <div>
      <header className="App-header">
        <h1 className="App-title">Contact Manager X</h1>
        </header>
        <Nav bsStyle="tabs" activeKey="1">
          <NavItem eventKey="1" href="/add-contact">
            Add Contact
          </NavItem>
          <NavItem eventKey="2" href="/all-contacts">
            View Contacts
          </NavItem>
        </Nav>
        </div>
    );
  }
}
