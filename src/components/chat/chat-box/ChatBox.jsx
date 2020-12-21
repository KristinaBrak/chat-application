import React, {useEffect, useState} from 'react';
import {Button, Form, FormControl} from 'react-bootstrap';
import {KEY, POLLING_INTERVAL_SEC, URL} from '../../../consts';
import uuid from '../../../utils/uuid';
import useAPI from '../../../hooks/ApiHook';
import ChatBoxDisplay from './chat-box-display/ChatBoxDisplay';
import useEnterSubmit from '../../../hooks/EnterSubmitHook';
import Loader from '../../miscellaneous/Loader';
import './chat-box.css';

const ChatBox = ({userId, activeChatId}) => {
  const [loading, , data, reload, changeUrl] = useAPI(URL + activeChatId);
  const [text, setText] = useState('');
  const [sendPending, setSendPending] = useState(false);

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
    if (text === '' || sendPending) {
      return;
    }
    const message = {
      id: uuid(),
      userId,
      text,
      createdAt: String(new Date()),
    };
    const updatedMessages = data.messages.concat(message);
    const updatedChat = {...data, messages: updatedMessages};
    setText('');
    setSendPending(true);
    fetch(URL + activeChatId, {
      method: 'PUT',
      headers: {
        versioning: 'false',
        'secret-key': KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedChat),
    })
      .then(() => {
        reload();
        setSendPending(false);
      })
      .catch(() => {
        setSendPending(false);
      });
  };

  useEnterSubmit(updateChat);

  return (
    <div className="chat-box">
      {!data || loading ? (
        <Loader size="md" />
      ) : (
        <>
          <ChatBoxDisplay activeUserId={userId} activeChat={data} />
          <Form
            className="user-input"
            onSubmit={event => {
              event.preventDefault();
              updateChat();
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
            <Button variant="primary" className="send-button" type="submit">
              <p>Send</p>
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default ChatBox;
