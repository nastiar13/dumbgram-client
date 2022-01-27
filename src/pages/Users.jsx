import React, { useState } from 'react';
import Feed from '../components/Feed';
import Navigation from '../components/Navigation';
import UserProfile from '../components/UsersProfile';

export default function Users() {
  const [feed, setFeed] = useState(true);
  return (
    <div className="body" style={{ display: 'flex' }}>
      <div className="profile">
        <UserProfile feed={feed} setFeed={(value) => setFeed(value)} />
      </div>
      <div className="vertical-line"></div>
      <div className="content">
        <Navigation />
        <Feed />
      </div>
    </div>
  );
}
