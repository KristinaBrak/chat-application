import React from 'react';

const ChatBoxDisplay = ({activeChat}) => {
  return (
    <ul>
      {activeChat.messages.map(message => (
        <li key={message.id} style={{listStyleType: 'none'}}>
          {message.text}
        </li>
      ))}
    </ul>
  );
};

export default ChatBoxDisplay;
