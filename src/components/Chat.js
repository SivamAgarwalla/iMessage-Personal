import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import Message from './Message';
import db from '../firebase';
import './Chat.css';
import { selectChatName, selectChatId } from '../features/chatSlice';
import firebase from 'firebase';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

const Chat = () => {
  const [messageInput, setMessageInput] = useState('');
  const user = useSelector(selectUser);
  const chatId = useSelector(selectChatId);
  const chatName = useSelector(selectChatName);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      db.collection('chats')
        .doc(chatId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('chats').doc(chatId).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: messageInput,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });
    setMessageInput('');
  };

  return (
    <div className='chat'>
      <div className='chat__header'>
        <h5>
          To: <span className='chat__name'> {chatName} </span>
        </h5>
        <small> Details </small>
      </div>
      <div className='chat__messages'>
        <FlipMove>
          {messages
            .slice(0)
            .reverse()
            .map(({ id, data }) => (
              <Message key={id} content={data} />
            ))}
        </FlipMove>
      </div>
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
