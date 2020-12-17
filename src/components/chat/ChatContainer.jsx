import React from 'react';
import ChatBox from './chat-box/ChatBox';
import ChatList from './chat-list/ChatList';
import useChat from './useChat';

const ChatContainer = ({userId}) => {
  const {activeChat} = useChat();

  return (
    <>
      <ChatList />
      {activeChat ? <ChatBox userId={userId} /> : null}
    </>
  );
};

export default ChatContainer;
