import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import './Chat.css';

const Chat = () => {
  const [messageInput, setMessageInput] = useState('');
  const sendMessage = (e) => {
    e.preventDefault();
    //Firebase

    setMessageInput('');
  };
  return (
    <div className='chat'>
      <div className='chat__header'>
        <h5>
          To: <span className='chat__name'> Chat Name</span>
        </h5>
        <small> Details </small>
      </div>
      <div className='chat__messages'></div>
      <div className='chat__input'>
        <form>
          <input
            value={messageInput}
            type='text'
            placeholder='iMessage'
            onChange={(e) => setMessageInput(e.target.value)}
          ></input>
          <button onClick={sendMessage}> Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon
            style={{ color: 'd4d4d4' }}
            className='chat__mic'
          ></MicNoneIcon>
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
