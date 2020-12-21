import React from 'react';
import {UNAVAILABLE_USER} from '../../../../consts';

const ChatBoxDisplay = ({activeUserId, activeChat}) => {
  function getUserName(userId) {
    const users = JSON.parse(localStorage.getItem('users'));
    const foundUser = users.find(user => user.id === userId) ?? UNAVAILABLE_USER;
    return foundUser.name;
  }

  return (
    <ul
      style={{
        height: '80%',
        overflow: 'auto',
        paddingLeft: '20px',
        paddingRight: '20px',
        margin: '0',
      }}
    >
      {activeChat.messages.map(message => (
        <li
          key={message.id}
          style={{
            listStyleType: 'none',
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={
              message.userId === activeUserId
                ? {alignSelf: 'flex-end', textAlign: 'right'}
                : {alignSelf: 'flex-start', textAlign: 'left'}
            }
          >
            <p
              style={{
                fontWeight: 'bold',
                marginBottom: '0',
                paddingBottom: '0',
              }}
            >
              {getUserName(message.userId)}
            </p>
            <p
              style={{
                marginBottom: '0',
                border: '1px solid white',
                background: 'white',
                borderRadius: '15px',
                display: 'inline-block',
                padding: '10px',
                paddingBottom: '5px',
                wordBreak: 'break-all',
              }}
            >
              {message.text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ChatBoxDisplay;
