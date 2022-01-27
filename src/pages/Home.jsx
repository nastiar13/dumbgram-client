import React, { useState } from 'react';
import Feed from '../components/Feed';
import MyProfile from '../components/MyProfile';
import Navigation from '../components/Navigation';
import Explore from '../components/Explore';

export default function Home() {
  const [feed, setFeed] = useState(true);
  return (
    <div className="body" style={{ display: 'flex' }}>
      <div className="profile">
        <MyProfile feed={feed} setFeed={(value) => setFeed(value)} />
      </div>
      <div className="vertical-line"></div>
      <div className="content">
        <Navigation />
        {feed ? <Feed /> : <Explore />}
      </div>
    </div>
  );
}
