import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import bcrypt from 'bcryptjs';
import {useHistory} from 'react-router-dom';
import useEnterSubmit from '../../hooks/EnterSubmitHook';
import './../../styles/login/login.css';

const Login = ({setUser}) => {
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
    <div className="login">
      <Form
        className="form"
        onSubmit={event => {
          event.preventDefault();
          login();
        }}
      >
        <h2>Login</h2>
        <Form.Group controlId="formBasicEmail" className="form-group">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="login-input"
            isInvalid={emailError}
            type="email"
            placeholder="Enter email"
            onChange={({target: {value}}) => {
              setEmailText(value);
            }}
          />
          <Form.Text className="text-muted">{emailError}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="form-group">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="login-input"
            isInvalid={passwordError}
            type="password"
            placeholder="Enter password"
            onChange={({target: {value}}) => {
              setPasswordText(value);
            }}
          />
          <Form.Text className="text-muted">{passwordError}</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" className="login-button">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
