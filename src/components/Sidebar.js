import React from 'react';
import SidebarChat from './SidebarChat';
import { Avatar, IconButton } from '@material-ui/core';
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlined from '@material-ui/icons/RateReviewOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar className='sidebar__avatar' />
        <div className='sidebar__input'>
          <SearchIcon />
          <input placeholder='Search'></input>
        </div>
        <IconButton variant='outlined' className='sidebar__inputButton'>
          <RateReviewOutlined style={{ color: 'd4d4d4' }} />
        </IconButton>
      </div>
      <div className='sidebar__chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
