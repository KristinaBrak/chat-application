import React, {createContext, useState} from 'react';
import chatsData from '../chat/Data';

const ChatContext = createContext([[], () => {}]);

const ChatContextProvider = ({children}) => {
  // const [state, setState] = useState({chats: chatsData});
  const [state, setState] = useState(chatsData);

  return <ChatContext.Provider value={[state, setState]}>{children}</ChatContext.Provider>;
};

export {ChatContext, ChatContextProvider};
