import React, {useEffect, useState} from 'react';
import {ACTIVE_CHAT_ID, ACTIVE_CHAT_STORAGE_KEY, CHAT_IDS, URL} from '../../consts';
import useAPI from './ApiHook';
import ChatBox from './chat-box/ChatBox';
import ChatList from './chat-list/ChatList';

const ChatContainer = ({userId}) => {
  const [loading, error, data, reload] = useAPI(URL + CHAT_IDS);
  const [activeChatId, setActiveChatId] = useState(null);

  useEffect(() => {
    const initialActiveChatId = localStorage.getItem(ACTIVE_CHAT_STORAGE_KEY);
    if (!initialActiveChatId) {
      localStorage.setItem(ACTIVE_CHAT_STORAGE_KEY, ACTIVE_CHAT_ID);
    }
    setActiveChatId(initialActiveChatId ?? ACTIVE_CHAT_ID);
  }, []);

  if (!data || loading) {
    return <div>Loading</div>;
  }

  return (
    <div style={{display: 'flex', height: '100vh'}}>
      <ChatList chatList={data} setActiveChatId={setActiveChatId} activeChatId={activeChatId} />
      <ChatBox userId={userId} activeChatId={activeChatId} />
    </div>
  );
};

export default ChatContainer;
