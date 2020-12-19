import React, {useEffect, useState} from 'react';
import {Button, Form, FormControl} from 'react-bootstrap';
import {KEY, POLLING_INTERVAL_SEC, URL} from '../../../consts';
import uuid from '../../../utils/uuid';
import useAPI from '../ApiHook';
import ChatBoxDisplay from './chat-box-display/ChatBoxDisplay';

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

  if (!data || loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <ChatBoxDisplay activeChat={data} />
      <Form
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
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </>
  );
};

export default ChatBox;
