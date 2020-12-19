import React from 'react';
import ChatBoxDisplayStyle from './ChatBoxDisplayStyle';

const ChatBoxDisplay = ({activeChat}) => {
  return (
    <ChatBoxDisplayStyle>
      {activeChat.messages.map(message => (
        <li key={message.id}>
          <div
            style={{
              marginBottom: '10px',
            }}
          >
            <p style={{fontWeight: 'bold', marginBottom: '0', paddingBottom: '0'}}>
              {message.userId}
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
    </ChatBoxDisplayStyle>
  );
};

export default ChatBoxDisplay;
