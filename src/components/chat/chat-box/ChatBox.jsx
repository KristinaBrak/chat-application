import React, {useState} from 'react';
import {Button, Form, FormControl} from 'react-bootstrap';
import uuid from '../../../utils/uuid';
import useChat from '../useChat';

const ChatBox = ({userId}) => {
  const {activeChat, saveMessage} = useChat();
  const [text, setText] = useState('');

  const updateMessages = () => {
    const message = {
      id: uuid(),
      userId,
      text,
      createdAt: String(new Date()),
    };

    saveMessage(message);
  };

  return (
    <>
      {activeChat.messages.map(message => (
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
