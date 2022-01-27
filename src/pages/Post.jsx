import React from 'react';
import CreatePost from '../components/CreatePost';
import MyProfile from '../components/MyProfile';
import Navigation from '../components/Navigation';

function Post() {
  return (
    <div className="body" style={{ display: 'flex' }}>
      <div className="profile">
        <MyProfile />
      </div>
      <div className="vertical-line"></div>
      <div className="content">
        <Navigation />
        <CreatePost />
      </div>
    </div>
  );
}

export default Post;
