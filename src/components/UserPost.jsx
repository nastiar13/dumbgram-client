import React, { useEffect, useRef, useState } from 'react';
import CardItem from './CardItem';
import Masonry from 'masonry-layout';
let msnry;
function UserPost({ data }) {
  const grid = useRef(null);
  const handleLoad = () => {
    msnry.layout();
  };
  useEffect(() => {
    msnry = new Masonry(grid.current, {
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
            <div
              onLoad={handleLoad}
              className="grid_item"
              style={{ cursor: 'pointer' }}
            >
              <CardItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserPost;
