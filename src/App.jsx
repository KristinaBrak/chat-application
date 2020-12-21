import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ChatContainer from './components/chat/ChatContainer';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import users from './initial-data/UsersSchema';
import NavBar from './components/nav-bar/NavBar';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, []);

  const updateUsers = updatedUser => {
    setUser(updatedUser);
    const localStorageUsers = JSON.parse(localStorage.getItem('users'));
    const newUsers = localStorageUsers.map(localStorageUser =>
      localStorageUser.id === updatedUser.id ? updatedUser : localStorageUser
    );
    localStorage.setItem('users', JSON.stringify(newUsers));
  };

  return (
    <div className="root">
      <Router>
        <NavBar user={user} />
        <Switch>
          <Route exact path="/login">
            <Login setUser={updateUsers} />
          </Route>
          {user ? (
            <>
              <Route exact path="/chat">
                <ChatContainer user={user} />
              </Route>
              <Route exact path="/profile">
                <Profile user={user} setUser={updateUsers} />
              </Route>
            </>
          ) : (
            <Redirect to={{pathname: '/login'}} />
          )}
        </Switch>
      </Router>
    </div>
  );
};
export default App;
