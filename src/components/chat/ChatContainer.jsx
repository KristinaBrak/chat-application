import React, {useEffect, useState} from 'react';
import {ACTIVE_CHAT_ID, ACTIVE_CHAT_STORAGE_KEY, CHAT_IDS, URL} from '../../consts';
import useAPI from '../../hooks/ApiHook';
import Loader from '../miscellaneous/Loader';
import ChatBox from './chat-box/ChatBox';
import ChatList from './chat-list/ChatList';
import './chat-container.css';

const ChatContainer = ({user}) => {
  const [loading, , data] = useAPI(URL + CHAT_IDS);
  const [activeChatId, setActiveChatId] = useState(null);

  useEffect(() => {
    const initialActiveChatId = localStorage.getItem(ACTIVE_CHAT_STORAGE_KEY);
    if (!initialActiveChatId) {
      localStorage.setItem(ACTIVE_CHAT_STORAGE_KEY, ACTIVE_CHAT_ID);
    }
    setActiveChatId(initialActiveChatId ?? ACTIVE_CHAT_ID);
  }, []);

  if (!data || loading) {
    return <Loader size="lg" />;
  }

  return (
    <div className="chat-container">
      <ChatList chatList={data} setActiveChatId={setActiveChatId} activeChatId={activeChatId} />
      <ChatBox userId={user.id} activeChatId={activeChatId} />
    </div>
  );
};

export default ChatContainer;
