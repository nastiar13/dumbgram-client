import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Notification from './Notification';

function Navigation() {
  const [notif, setNotif] = useState(false);
  return (
    <div className="nav_container">
      <div className="search">
        <img src="/img/search.png" alt="" />
        <input className="search" type="text" />
      </div>
      <div className="nav_btn_list">
        <div style={{ display: 'inline', position: 'relative' }}>
          <img
            onClick={() => setNotif(!notif)}
            className="img_nav_btn_list"
            src="/img/bell.png"
            alt=""
          />
          {notif && (
            <div className="notif">
              <div className="triangle"></div>
              <Notification />
            </div>
          )}
        </div>
        <Link to="/message">
          <img className="img_nav_btn_list" src="/img/paper-plane.png" alt="" />
        </Link>
        <Link to="create-post">
          <button className="btnRainbow create-post">
            <p className="plus_icon">+</p>
            Create Post
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
