import React, { useContext, useEffect, useState } from 'react';
import ChatList from '../components/ChatList';
import Message from '../components/Message';
import Navigation from '../components/Navigation';
import { io } from 'socket.io-client';
import { UserContext } from '../context/userContext';
import { Link } from 'react-router-dom';
import { API } from '../config/api';
let socket;

function Chat() {
  const [state] = useContext(UserContext);
  const [conversations, setConversations] = useState([]);
  const [convId, setConvId] = useState(null);
  const [subject, setSubject] = useState({});
  useEffect(() => {
    socket = io('http://localhost:5000', {
      auth: {
        token: localStorage.token,
      },
    });
    loadConversations();
    if (localStorage.convId) {
      setConvId(localStorage.convId);
      getSubject(localStorage.convId);
    }
    return () => {
      socket.disconnect();
      localStorage.removeItem('convId');
    };
  }, []);
  const setAnyData = (id, data) => {
    setConvId(id);
    setSubject(data);

    // socket.emit('message was readed', { convId: id, target_id: data.id });
    // socket.on('message updated', () => {
    //   console.log('aa');
    //  loadConversations();
    // });
    //
  };

  const getSubject = async (convId) => {
    try {
      const response = await (await API.get('/conv/' + convId)).data.conv;

      setSubject(
        response.from_user === state.user.id ? response.to : response.from,
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  const loadConversations = () => {
    socket.emit('load conversations', { user_id: state.user.id });
    socket.on('conversations', (conversationsData) => {
      setConversations(conversationsData);
    });
  };

  return (
    <div className="chat" style={{ display: 'flex' }}>
      <div className="profile">
        <Link className="link" to="/">
          <h1 className="logo">Dumbgram</h1>
        </Link>
        <section className="conv_list">
          <ChatList
            data={conversations}
            setAnyData={(id, data) => setAnyData(id, data)}
          />
        </section>
      </div>

      <div className="vertical-line" />
      <div className="content">
        <Navigation />
        <Message
          loadConversations={() => loadConversations()}
          convId={convId}
          subject={subject}
        />
      </div>
    </div>
  );
}

export default Chat;
