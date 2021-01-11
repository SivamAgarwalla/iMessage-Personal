import React from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';

const SidebarChat = () => {
  return (
    <div className='sidebarChat'>
      <Avatar />
      <div className='sidebarChat__info'>
        <h4> Chat Name </h4>
        <p> Last Chat Message... </p>
        <small> Timestamp </small>
      </div>
    </div>
  );
};

export default SidebarChat;
