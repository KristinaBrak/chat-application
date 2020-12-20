import React, {useEffect, useState} from 'react';
import {Button, Form, FormControl} from 'react-bootstrap';
import {KEY, POLLING_INTERVAL_SEC, URL} from '../../../consts';
import uuid from '../../../utils/uuid';
import useAPI from '../../../hooks/ApiHook';
import ChatBoxDisplay from './chat-box-display/ChatBoxDisplay';
import useEnterSubmit from '../../../hooks/EnterSubmitHook';

const ChatBox = ({userId, activeChatId}) => {
  const [loading, error, data, reload, changeUrl] = useAPI(URL + activeChatId);
  const [text, setText] = useState('');

  useEffect(() => {
    changeUrl(URL + activeChatId);
  }, [activeChatId]);

  useEffect(() => {
    const interval = setInterval(() => {
      reload();
    }, POLLING_INTERVAL_SEC * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const updateChat = () => {
    const message = {
      id: uuid(),
      userId,
      text,
      createdAt: String(new Date()),
    };
    const updatedMessages = data.messages.concat(message);
    const updatedChat = {...data, messages: updatedMessages};

    fetch(URL + activeChatId, {
      method: 'PUT',
      headers: {
        versioning: 'false',
        'secret-key': KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedChat),
    });

    reload();
  };

  useEnterSubmit(updateChat);

  const styleBox = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(215, 227, 239, 1)',
    width: '100%',
  };
  if (!data || loading) {
    return <div style={styleBox}>Loading...</div>;
  }
  return (
    <div style={styleBox}>
      <ChatBoxDisplay activeChat={data} style={{justifyContent: 'center'}} />
      <Form
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: '10px',
          marginTop: '0',
          paddingTop: '8px',
          borderTop: '2px solid rgba(54, 93, 135, 0.5)',
        }}
        onSubmit={event => {
          event.preventDefault();
          updateChat();
          setText('');
        }}
      >
        <FormControl
          as="input"
          type="text"
          onChange={({target: {value}}) => {
            setText(value);
          }}
          value={text}
        />
        <Button variant="primary" type="submit" style={{padding: '0', width: '150px'}}>
          Send
        </Button>
      </Form>
    </div>
  );
};

export default ChatBox;
