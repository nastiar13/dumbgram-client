import React, { useEffect, useState } from 'react';
import { API } from '../config/api';
import FeedModal from './FeedModal';

function CardItem({ item }) {
  const [modalShow, setModalShow] = useState(false);
  const [like, setLike] = useState([]);
  const getLike = async () => {
    try {
      setLike(await (await API.get('/like/' + item.id)).data.like);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLike();
  }, []);
  return (
    <div className="card_item">
      <img
        onClick={() => setModalShow(true)}
        className="card_img"
        src={item.url}
        alt=""
      />
      <div className="card_footer">
        <div className="card_user">
          <img
            src={item.post_owner.profile_picture}
            alt=""
            className="card_img_user"
          />
          <p style={{ color: '#fff', marginLeft: '1rem' }}>
            {item.post_owner.name}
          </p>
        </div>
        <div className="card_lcm">
          <div className="card_lcm_list_icon">
            <img src="/img/heart.svg" alt="" />
            <img src="/img/message-circle.svg" alt="" />
            <img src="/img/paper-plane.svg" alt="" />
          </div>
          <p className="like_total">{like.length} Like</p>
        </div>
      </div>
      <FeedModal
        item={item}
        like={like.length}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default CardItem;
