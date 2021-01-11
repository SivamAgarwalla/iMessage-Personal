import React, { useState, useEffect } from 'react';
import SidebarChat from './SidebarChat';
import { Avatar, IconButton } from '@material-ui/core';
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlined from '@material-ui/icons/RateReviewOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';

const Sidebar = () => {
  const user = useSelector(selectUser);
  const [userChats, setUserChats] = useState([]);

  useEffect(() => {
    db.collection('chats').onSnapshot((snapshot) =>
      setUserChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const addChat = () => {
    const chatName = prompt('Please enter a chat name: ');
    if (chatName) {
      db.collection('chats').add({
        chatName: chatName,
      });
    }
  };
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar src={user.photo} className='sidebar__avatar' />
        <div className='sidebar__input'>
          <SearchIcon />
          <input placeholder='Search'></input>
        </div>
        <IconButton
          variant='outlined'
          className='sidebar__inputButton'
          onClick={addChat}
        >
          <RateReviewOutlined style={{ color: 'd4d4d4' }} />
        </IconButton>
        <IconButton
          variant='outlined'
          className='sidebar__logoutButton'
          onClick={() => auth.signOut()}
        >
          <ExitToAppIcon pl={1} style={{ color: 'd4d4d4' }} />
        </IconButton>
      </div>
      <div className='sidebar__chats'>
        {userChats.map(({ id, data: { chatName } }) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
