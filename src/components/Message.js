import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core';
import './Message.css';
import { selectUser } from '../features/userSlice';

const Message = forwardRef(
  (
    { id, content: { timestamp, displayName, email, message, photo, uid } },
    ref
  ) => {
    const user = useSelector(selectUser);
    return (
      <div
        ref={ref}
        className={`message ${user.email === email && 'message__sender'}`}
      >
        <Avatar className='message__photo' src={photo} />
        <p> {message}</p>
        <small
          className={
            user.email === email
              ? 'message__timestamp'
              : 'message__not__timestamp'
          }
        >
          {new Date(timestamp?.toDate()).toLocaleString()}
        </small>
      </div>
    );
  }
);

export default Message;
