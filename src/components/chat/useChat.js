import {useContext, useEffect} from 'react';
import {ChatContext} from '../context/ChatContext';

const useChat = () => {
  const [{chats, activeChat}, setState] = useContext(ChatContext);

  useEffect(() => {
    const initialActiveChat = chats.find(chat => chat.isActive) ?? null;
    setState(state => ({...state, activeChat: initialActiveChat}));
  }, []);

  const setActiveChat = chatId => {
    const updChats = chats.map(chat => (activeChat?.id === chat.id ? activeChat : chat));
    const updatedChats = updChats.map(chat =>
      chat.id === chatId ? {...chat, isActive: true} : {...chat, isActive: false}
    );
    const newActiveChat = updatedChats.find(chat => chat.isActive) ?? null;
    setState(state => ({...state, chats: updatedChats, activeChat: newActiveChat}));
  };

  const saveChat = updatedChat => {
    const updatedChats = chats.map(chat => (chat.id === updatedChat.id ? updatedChat : chat));
    setState(state => ({...state, chats: updatedChats}));
  };

  const saveMessage = message => {
    const updatedChat = {...activeChat, messages: [...activeChat.messages, message]};
    setState(state => ({...state, activeChat: updatedChat}));
  };

  return {chats, activeChat, setActiveChat, saveChat, saveMessage};
};

export default useChat;
