import ChatContainer from './components/chat/ChatContainer';
import Login from './components/login/Login';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import React, {useState} from 'react';
import ChatBoxDisplay from './components/chat/chat-box/chat-box-display/ChatBoxDisplay';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div style={{height: '100vh'}}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/login">
            <Login user={user} setUser={setUser} />
          </Route>
          {user ? (
            <>
              <Route exact path="/chat">
                <ChatContainer user={user} />
              </Route>
              {/* <Route exact path="/profile"></Route> */}
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
