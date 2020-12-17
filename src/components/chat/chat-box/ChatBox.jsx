import React, {useEffect, useState} from 'react';
import {Button, Form, FormControl} from 'react-bootstrap';
import uuid from '../../../utils/uuid';

const ChatBox = ({userId, activeChat, submitChat}) => {
  const [text, setText] = useState('');
  const [chat, setChat] = useState(activeChat);

  useEffect(() => {
    // submitChat(chat);
    setChat(activeChat);
  }, [activeChat]);

  const updateMessages = () => {
    const message = {
      id: uuid(),
      userId,
      text,
      createdAt: String(new Date()),
    };

    const updatedChat = {...chat, messages: [...chat.messages, message]};
    setChat(updatedChat);
  };

  return (
    <>
      {chat.messages.map(message => (
        <div>{message.text}</div>
      ))}
      <Form
        onSubmit={event => {
          event.preventDefault();
          updateMessages();
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
