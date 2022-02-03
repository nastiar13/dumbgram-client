import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';
import { UserContext } from '../context/userContext';
let socket;

function ChatList() {
  const [state] = useContext(UserContext);
  const [conversations, setConversations] = useState([]);
  console.log(conversations);
  useEffect(() => {
    socket = io('http://localhost:5000', {
      auth: {
        token: localStorage.token,
      },
    });
    loadConversations();
    return () => {
      socket.disconnect();
    };
  }, []);
  const loadConversations = () => {
    socket.emit('load conversations', { user_id: state.user.id });
    socket.on('conversations', (conversationsData) => {
      setConversations(conversationsData);
    });
  };
  return (
    <div>
      <Link className="link" to="/">
        <h1 className="logo">Dumbgram</h1>
      </Link>
      <section className="conv_list">
        {conversations.map((conv) => {
          const data = conv.from_user === state.user.id ? conv.to : conv.from;
          return (
            <div className="conversations" key={conv.id}>
              <img
                src={data.profile_picture}
                className="card_img_user profile_pict_chat"
                alt="profile_picture"
              />
              <div className="conversation_detail">
                <h5 className="conv_name">{data.name}</h5>
                <p className="last_msg">last messages</p>
              </div>
              <div className="unread_msg">1</div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default ChatList;
