import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavBar = ({user}) => {
  return (
    <Navbar bg="primary" style={{display: 'flex', justifyContent: 'flex-start'}}>
      <Nav variant="primary">
        {!user ? (
          <Nav.Item>
            <Link to="/login" style={{color: 'white'}}>
              Login
            </Link>
          </Nav.Item>
        ) : (
          <>
            <Nav.Item style={{paddingRight: '20px'}}>
              <Link to="/chat" style={{color: 'white'}}>
                Chat
              </Link>
            </Nav.Item>
            <Nav.Item style={{paddingRight: '20px'}}>
              <Link to="/profile" style={{color: 'white'}}>
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
