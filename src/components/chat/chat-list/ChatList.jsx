import React from 'react';
import {Button} from 'react-bootstrap';
import useChat from '../useChat';

const ChatList = () => {
  const {chats, activeChat, setActiveChat} = useChat();

  return (
    <ul>
      {chats.map(chat => (
        <li key={chat.id}>
          <Button
            variant={activeChat?.id === chat.id ? 'warning' : 'primary'}
            onClick={() => setActiveChat(chat.id)}
          >
            {chat.id}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ChatList;
