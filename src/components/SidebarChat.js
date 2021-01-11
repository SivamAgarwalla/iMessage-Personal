import React from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';

const SidebarChat = ({ id, chatName }) => {
  return (
    <div className='sidebarChat'>
      <Avatar />
      <div className='sidebarChat__info'>
        <h4> {chatName} </h4>
        <p> Last Chat Message... </p>
        <small> Timestamp </small>
      </div>
    </div>
  );
};

export default SidebarChat;
