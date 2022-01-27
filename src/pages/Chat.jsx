import React from 'react';
import ChatList from '../components/ChatList';
import Message from '../components/Message';
import Navigation from '../components/Navigation';

function Chat() {
  return (
    <div className="chat" style={{ display: 'flex' }}>
      <div className="profile">
        <ChatList />
      </div>
      <div className="vertical-line"></div>
      <div className="content">
        <Navigation />
        <Message />
      </div>
    </div>
  );
}

export default Chat;
