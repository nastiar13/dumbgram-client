import React, { useEffect, useRef, useState } from 'react';
import CardItem from './CardItem';
import Masonry from 'masonry-layout';
import imagesloaded from 'imagesloaded';
import { API } from '../config/api';
let msnry;
function Feed() {
  const grid = useRef(null);
  const [feeds, setFeeds] = useState([]);
  const handleLoad = () => {
    msnry.layout();
  };

  const getFeeds = async () => {
    try {
      setFeeds(await (await API.get('/feeds-by-foll')).data.posts);
      msnry = new Masonry(grid.current, {
        itemSelector: '.grid_item',
        gutter: 20,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeeds();
  }, []);

  return (
    <div className="feed_container">
      <h1 className="h1_content_title">Feed</h1>
      <div ref={grid} className="feed_content">
        {feeds.map((item) => {
          return (
            <div
              onLoad={handleLoad}
              key={item.id}
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

export default Feed;
