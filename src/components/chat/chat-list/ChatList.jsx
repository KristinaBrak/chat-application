import React from 'react';
import {Nav} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {ACTIVE_CHAT_STORAGE_KEY} from '../../../consts';
import './chat-list.css';

const ChatList = ({chatList, activeChatId, setActiveChatId}) => (
  <div className="chat-list">
    {chatList.map(chat => (
      <Nav.Link key={chat.id}>
        <Button
          variant={activeChatId === chat.id ? 'primary' : 'outline-primary'}
          className="chat-button"
          key={chat.id}
          onClick={() => {
            localStorage.setItem(ACTIVE_CHAT_STORAGE_KEY, chat.id);
            setActiveChatId(chat.id);
          }}
        >
          <p>{chat.name}</p>
        </Button>
      </Nav.Link>
    ))}
  </div>
);

export default ChatList;
