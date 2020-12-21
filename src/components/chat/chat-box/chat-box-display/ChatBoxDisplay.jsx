import React, {useEffect, useRef} from 'react';
import {UNAVAILABLE_USER} from '../../../../consts';
import './chat-box-display.css';

const ChatBoxDisplay = ({activeUserId, activeChat}) => {
  const messagesEndRef = useRef(null);
  function getUserName(userId) {
    const users = JSON.parse(localStorage.getItem('users'));
    const foundUser = users.find(user => user.id === userId) ?? UNAVAILABLE_USER;
    return foundUser.name;
  }

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({behavior: 'smooth'});
  }, [activeChat]);

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
      <li ref={messagesEndRef} />
    </ul>
  );
};

export default ChatBoxDisplay;
