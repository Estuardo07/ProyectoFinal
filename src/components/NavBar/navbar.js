import React from 'react';
import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../images/subs.png';

const A = styled.a`
  color: ${({ theme }) => theme.text} !important;
`;

function navbar() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <A className="nav-link" href="#">A</A>
          </Link>
          <Dropdown id="dropdown-basic-button">
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              <A href="#">B</A>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link to="/">
                <Dropdown.Item href="#/action-1">x</Dropdown.Item>
              </Link>
              <Link to="/">
                <Dropdown.Item href="#/action-1">y</Dropdown.Item>
              </Link>
              <Link to="/">
                <Dropdown.Item href="#/action-1">z</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
          <Link to="/">
            <A className="nav-link" href="#">C</A>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;