import React, { useEffect, useState } from 'react';
import { API } from '../config/api';
import FeedModal from './FeedModal';

function ExploreItem({ item }) {
  const [modalShow, setModalShow] = useState(false);
  const [like, setLike] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const getLike = async () => {
    try {
      setLike(await (await API.get('/like/' + item.id)).data.like);
    } catch (error) {
      console.log(error);
    }
  };
  const getIsLike = async () => {
    try {
      const response = await (
        await API.get('/is-like/' + item.id)
      ).data.response;
      if (response) {
        setIsLike(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLike();
    getIsLike();
  }, []);
  return (
    <div className="card_item">
      <img
        onClick={() => setModalShow(true)}
        className="card_img"
        src={item.url}
        alt=""
      />

      <FeedModal
        item={item}
        like={like.length}
        show={modalShow}
        onHide={() => setModalShow(false)}
        getLike={() => getLike()}
        setIsLikeProps={(condition) => setIsLike(condition)}
        isLike={isLike}
      />
    </div>
  );
}

export default ExploreItem;
