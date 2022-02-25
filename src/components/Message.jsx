import React, { useContext, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { UserContext } from '../context/userContext';
let socket;
function Message({ convId, subject, loadConversations }) {
  const [state] = useContext(UserContext);
  const element = useRef(null);
  const [messages, setMessages] = useState([]);
  const sendMessage = (e) => {
    if ((e.key === 'Enter') & (e.target.value !== '')) {
      const data = {
        target_id: subject.id,
        message_body: e.target.value,
      };
      socket.emit('send message', data);
      e.target.value = '';
      socket.on('new message', () => {
        socket.emit('load messages', { convId });
        loadConversations();
      });
      element.current.scrollTo(0, element.current.scrollHeight + 40);
    }
  };
  useEffect(() => {
    socket = io('http://localhost:5000', {
      auth: {
        token: localStorage.token,
      },
      query: {
        id: state.user.id,
      },
    });

    if (localStorage.chatSubject) {
      setMessages([]);
    } else {
      if (convId !== null) {
        socket.emit('load messages', { convId });
        socket.on('messages', (data) => {
          setMessages(data);
        });
      }
    }
  }, [convId]);

  if (convId === null || localStorage.chatSubject) {
    return (
      <div>
        <h1
          style={{
            color: '#fff',
            textAlign: 'center',
            marginTop: '30%',
          }}
        >
          No Message
        </h1>
      </div>
    );
  }
  return (
    <div className="message">
      <div className="msg_user">
        <img
          className="card_img_user profile_pict_chat"
          src={subject.profile_picture}
          alt=""
        />
        <h4 style={{ color: 'white', marginLeft: '1rem' }}>{subject.name}</h4>
      </div>
      <div ref={element} className="messages_container">
        {messages?.map((msg) => {
          if (msg.from_user === state.user.id) {
            return (
              <p key={msg.id} className="from_me message_item">
                {msg.message_body}
              </p>
            );
          }
          return (
            <p key={msg.id} className="from_them message_item">
              {msg.message_body}
            </p>
          );
        })}
      </div>
      <input
        onKeyPress={(e) => sendMessage(e)}
        type="text"
        name=""
        id=""
        className="chat_input"
        placeholder="Send Message"
      />
    </div>
  );
}

export default Message;
