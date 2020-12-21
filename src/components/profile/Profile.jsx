import React, {useEffect, useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import {SALT_ROUNDS} from '../../consts';
import bcrypt from 'bcryptjs';
import './profile.css';

const Profile = ({user, setUser}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    let timeout;
    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
      }, 5 * 1000);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [showAlert]);

  const updateUser = () => {
    const updatedUser = {
      ...user,
      email: email ?? user.email,
      name: name ?? user.name,
      password: password ? bcrypt.hashSync(password, SALT_ROUNDS) : user.password,
    };

    setUser(updatedUser);
    setEmail(null);
    setPassword(null);
    setName(null);
  };

  return (
    <div className="profile">
      <Form
        onSubmit={event => {
          event.preventDefault();
          updateUser();
          setShowAlert(true);
        }}
        className="form"
      >
        <h2>Profile</h2>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={user.name}
            className="profile-input"
            onChange={({target: {value}}) => {
              setName(value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="form-group">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder={user.email}
            onChange={({target: {value}}) => {
              setEmail(value);
            }}
            className="profile-input"
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="form-group">
          <Form.Label>Change Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="New password"
            onChange={({target: {value}}) => {
              setPassword(value);
            }}
            className="profile-input"
          />
        </Form.Group>

        {showAlert ? <Alert variant="success">Profile updated</Alert> : null}
        <Button variant="primary" type="submit" className="profile-button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Profile;
