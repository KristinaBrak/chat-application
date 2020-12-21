import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './../../styles/nav-bar/nav-bar.css';

const NavBar = ({user}) => {
  return (
    <Navbar bg="primary" className="nav-bar">
      <Nav variant="primary">
        {!user ? (
          <Nav.Item>
            <Link to="/login" className="link">
              Login
            </Link>
          </Nav.Item>
        ) : (
          <>
            <Nav.Item className="authenticated-item">
              <Link to="/chat" className="link">
                Chat
              </Link>
            </Nav.Item>
            <Nav.Item className="authenticated-item">
              <Link to="/profile" className="link">
                Profile
              </Link>
            </Nav.Item>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
