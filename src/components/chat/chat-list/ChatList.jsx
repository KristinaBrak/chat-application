import React, {useContext} from 'react';
import {Button} from 'react-bootstrap';
import {ChatContext} from '../../context/ChatContext';

const ChatList = ({setIsActive}) => {
  const [chats, setChats] = useContext(ChatContext);

  return (
    <ul>
      {chats.map(chat => (
        <li key={chat.id}>
          <Button onClick={() => setIsActive(chat.id)}>{chat.id}</Button>
        </li>
      ))}
    </ul>
  );
};

export default ChatList;
