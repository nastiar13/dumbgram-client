import Masonry from 'masonry-layout';
import React, { useEffect, useRef, useState } from 'react';
import { API } from '../config/api';
import imagesLoaded from 'imagesloaded';
import ExploreItem from './ExploreItem';
let msnry;
function Explore() {
  const [feeds, setFeeds] = useState([]);
  const grid = useRef(null);
  const handleLoad = () => {
    msnry.layout();
  };

  const getFeeds = async () => {
    try {
      setFeeds(await (await API.get('/feeds')).data.posts);
      msnry = new Masonry(grid.current, {
        itemSelector: '.grid_item',
        gutter: 10,
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
      <h1 className="h1_content_title">Explore</h1>
      <div ref={grid} className="feed_content">
        {feeds.map((item) => {
          return (
            <div
              onLoad={handleLoad}
              className="grid_item"
              style={{ cursor: 'pointer' }}
            >
              <ExploreItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Explore;
