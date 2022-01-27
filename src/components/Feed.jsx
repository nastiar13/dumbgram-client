import React, { useState } from 'react';
import CardItem from './CardItem';
import FeedModal from './FeedModal';

function Feed() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="feed_container">
      <h1 className="h1_content_title">Feed</h1>
      <div className="feed_content">
        <div onClick={() => setModalShow(true)} style={{ cursor: 'pointer' }}>
          <CardItem />
        </div>
      </div>
      <FeedModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Feed;
