import React, { useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { UserContext } from '../context/userContext';
let socket;
function Notification() {
  const [state] = useContext(UserContext);
  const [notif, setNotif] = useState([]);
  useEffect(() => {
    socket = io('http://localhost:5000', {
      auth: {
        token: localStorage.token,
      },
      query: {
        id: state.user.id,
      },
    });
    socket.emit('load notif');
    socket.on('notif', (data) => {
      setNotif(data);
      console.log(data);
    });
  }, []);
  return (
    <div className="dropdown">
      {notif.map((item) => {
        return (
          <div className="card_user">
            <img
              src={item.user_comment.profile_picture}
              alt=""
              className="card_img_user"
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p
                style={{
                  color: '#fff',
                  marginLeft: '1rem',
                  marginBottom: 0,
                  display: 'block',
                }}
              >
                {item.user_comment.name}
              </p>
              <p className="notif_comment">
                Comment : <span>{item.comment}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Notification;
