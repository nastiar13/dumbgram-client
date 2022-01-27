import React from 'react';

function Notification() {
  return (
    <div className="dropdown">
      <div className="card_user">
        <img src="/img/rectangle 5.png" alt="" className="card_img_user" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p
            style={{
              color: '#fff',
              marginLeft: '1rem',
              marginBottom: 0,
              display: 'block',
            }}
          >
            zayn
          </p>
          <p className="comment">
            Komentar: <span>nice place</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notification;
