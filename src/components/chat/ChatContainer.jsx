import React, {useContext, useState} from 'react';
import {ChatContext} from '../context/ChatContext';
import ChatBox from './chat-box/ChatBox';
import ChatList from './chat-list/ChatList';

const ChatContainer = ({userId}) => {
  const [chats, setChats] = useContext(ChatContext);

  const initialActiveChat = chats.find(chat => chat.isActive) ?? null;
  const [activeChat, setActiveChat] = useState(initialActiveChat);

  const submitChat = updatedChat => {
    const updatedChats = chats.map(chat => (chat.id === updatedChat.id ? updatedChat : chat));
    setChats(updatedChats);
  };

  const setIsActive = chatId => {
    const updatedChats = chats.map(chat =>
      chat.id === chatId ? {...chat, isActive: true} : {...chat, isActive: false}
    );

    const newActiveChat = updatedChats.find(chat => chat.isActive) ?? null;
    setActiveChat(newActiveChat);
  };

  return (
    <ChatContext.Provider value={[chats, setChats]}>
      <ChatList setIsActive={setIsActive} />
      {activeChat ? (
        <ChatBox
          key={activeChat.id}
          userId={userId}
          activeChat={activeChat}
          submitChat={submitChat}
        />
      ) : null}
    </ChatContext.Provider>
  );
};

export default ChatContainer;
