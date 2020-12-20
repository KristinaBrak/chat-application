import React from 'react';
import {Nav} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {ACTIVE_CHAT_STORAGE_KEY} from '../../../consts';

const ChatList = ({chatList, activeChatId, setActiveChatId}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRight: '2px solid rgba(54, 93, 135, 1)',
        borderLeft: '2px solid rgba(54, 93, 135, 1)',
        width: '20%',
        overflow: 'auto',
      }}
    >
      {chatList.map(chat => (
        <Nav.Link key={chat.id}>
          <Button
            variant={activeChatId === chat.id ? 'primary' : 'outline-primary'}
            style={{listStyleType: 'none', width: '100%'}}
            key={chat.id}
            onClick={() => {
              localStorage.setItem(ACTIVE_CHAT_STORAGE_KEY, chat.id);
              setActiveChatId(chat.id);
            }}
          >
            {chat.name}
          </Button>
        </Nav.Link>
      ))}
    </div>
  );
};

export default ChatList;
