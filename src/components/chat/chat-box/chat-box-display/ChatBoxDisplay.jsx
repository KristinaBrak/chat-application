import React from 'react';
import {UNAVAILABLE_USER} from '../../../../consts';
import './../../../../styles/chat/chat-box-display.css';

const ChatBoxDisplay = ({activeUserId, activeChat}) => {
  function getUserName(userId) {
    const users = JSON.parse(localStorage.getItem('users'));
    const foundUser = users.find(user => user.id === userId) ?? UNAVAILABLE_USER;
    return foundUser.name;
  }

  return (
    <ul>
      {activeChat.messages.map(message => (
        <li key={message.id}>
          <div className={message.userId === activeUserId ? 'right' : 'left'}>
            <p className="user-name">{getUserName(message.userId)}</p>
            <p className="message">{message.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ChatBoxDisplay;
