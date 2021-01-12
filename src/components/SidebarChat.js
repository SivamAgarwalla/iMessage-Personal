import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import { useDispatch } from 'react-redux';
import { setChat } from '../features/chatSlice';
import db from '../firebase';
import * as timeago from 'timeago.js';

const SidebarChat = ({ id, chatName }) => {
  const dispatch = useDispatch();
  const [chatInfo, setChatInfo] = useState([]);

  useEffect(() => {
    db.collection('chats')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setChatInfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);
  return (
    <div
      onClick={() =>
        dispatch(
          setChat({
            chatId: id,
            chatName: chatName,
          })
        )
      }
      className='sidebarChat'
    >
      <Avatar />
      <div className='sidebarChat__info'>
        <h4> {chatName} </h4>
        <p> {chatInfo[0]?.message} </p>
        <small>
          {timeago.format(new Date(chatInfo[0]?.timestamp?.toDate()))}
        </small>
      </div>
    </div>
  );
};

export default SidebarChat;
