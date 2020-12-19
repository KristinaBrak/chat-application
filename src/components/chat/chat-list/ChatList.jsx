import React from 'react';
import Button from 'react-bootstrap/Button';
import {ACTIVE_CHAT_STORAGE_KEY} from '../../../consts';

const ChatList = ({chatList, activeChatId, setActiveChatId}) => {
  return (
    <ul>
      {chatList.map(chat => (
        <Button
          variant={activeChatId === chat.id ? 'warning' : 'primary'}
          key={chat.id}
          onClick={() => {
            localStorage.setItem(ACTIVE_CHAT_STORAGE_KEY, chat.id);
            setActiveChatId(chat.id);
          }}
        >
          <li key={chat.id}>{chat.name}</li>
        </Button>
      ))}
    </ul>
  );
};

export default ChatList;
