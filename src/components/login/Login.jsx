import React, {useEffect, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import bcrypt from 'bcryptjs';
// import {users} from '../../initial-data/UsersSchema';
import {useHistory} from 'react-router-dom';
import useEnterSubmit from '../../hooks/EnterSubmitHook';

const Login = ({user, setUser}) => {
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const history = useHistory();

  const login = () => {
    setPasswordError('');
    setEmailError('');
    const users = JSON.parse(localStorage.getItem('users'));
    const foundUser = users.find(({email}) => email === emailText);
    if (!foundUser) {
      setEmailError('Invalid user');
    } else {
      const isAuthenticated = bcrypt.compareSync(passwordText, foundUser.password);
      if (isAuthenticated) {
        setUser(foundUser);
        history.push('/chat');
      } else {
        setPasswordError('Incorrect password');
      }
    }
  };

  useEnterSubmit(login);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Form
        style={{
          border: '2px solid rgba(54, 93, 135, 1)',
          borderRadius: '5px',
          padding: '20px',
          maxWidth: '400px',
          minWidth: '280px',
          width: '100%',
        }}
        onSubmit={event => {
          event.preventDefault();
          login();
        }}
      >
        <Form.Group controlId="formBasicEmail" style={{width: '100%'}}>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            style={{width: '100%'}}
            isInvalid={emailError}
            type="email"
            placeholder="Enter email"
            onChange={({target: {value}}) => {
              setEmailText(value);
            }}
          />
          <Form.Text className="text-muted">{emailError}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" style={{width: '100%'}}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            style={{width: '100%'}}
            isInvalid={passwordError}
            type="password"
            placeholder="Enter password"
            onChange={({target: {value}}) => {
              setPasswordText(value);
            }}
          />
          <Form.Text className="text-muted">{passwordError}</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" style={{width: '100%'}}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
