import React, { useEffect, useRef } from 'react';
import CardItem from './CardItem';
import Masonry from 'masonry-layout';

function Feed(props) {
  const grid = useRef(null);
  useEffect(() => {
    new Masonry(grid.current, {
      itemSelector: '.grid_item',
      gutter: 20,
    });
  }, [props.feeds]);
  return (
    <div className="feed_container">
      <h1 className="h1_content_title">Feed</h1>
      <div ref={grid} className="feed_content">
        {props.feeds.map((item) => {
          return (
            <div className="grid_item" style={{ cursor: 'pointer' }}>
              <CardItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Feed;
