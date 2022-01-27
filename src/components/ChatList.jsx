import React from 'react';
import { Link } from 'react-router-dom';

function ChatList() {
  return (
    <div>
      <Link className="link" to="/">
        <h1 className="logo">Dumbgram</h1>
      </Link>
    </div>
  );
}

export default ChatList;
