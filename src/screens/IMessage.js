import React from 'react';
import './IMessage.css';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

const IMessage = () => {
  return (
    <div className='imessage'>
      <Sidebar />
      <Chat />
    </div>
  );
};

export default IMessage;
