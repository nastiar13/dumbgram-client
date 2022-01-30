import React, { useEffect, useRef } from 'react';
import CardItem from './CardItem';
import Masonry from 'masonry-layout';

function UserPost({ data }) {
  const grid = useRef(null);
  console.log(data);
  useEffect(() => {
    new Masonry(grid.current, {
      itemSelector: '.grid_item',
      gutter: 20,
    });
  }, [data]);
  return (
    <div className="feed_container">
      <h1 className="h1_content_title">Post</h1>
      <div ref={grid} className="feed_content">
        {data.map((item) => {
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

export default UserPost;
