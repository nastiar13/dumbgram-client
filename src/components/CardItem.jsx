import React, { useEffect, useState } from 'react';
import { API } from '../config/api';
import FeedModal from './FeedModal';

function CardItem({ item }) {
  const [modalShow, setModalShow] = useState(false);
  const [like, setLike] = useState([]);
  const [isLike, setIsLike] = useState(false);

  const likePost = async (postId) => {
    try {
      await API.post('/like/' + postId);
      getLike();
      setIsLike(true);
    } catch (error) {
      console.log(error);
    }
  };
  const unLikePost = async (postId) => {
    try {
      await API.delete('/like/' + postId);
      getLike();
      setIsLike(false);
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
  const getLike = async () => {
    try {
      setLike(await (await API.get('/like/' + item.id)).data.like);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getIsLike();
    getLike();
  }, []);
  return (
    <div className="card_item">
      <img
        onClick={() => setModalShow(true)}
        className="card_img"
        src={item.url}
        alt=""
        loading="lazy"
      />
      <div className="card_footer">
        <div className="card_user">
          <img
            src={item.post_owner.profile_picture}
            alt=""
            className="card_img_user"
            loading="lazy"
          />
          <p style={{ color: '#fff', marginLeft: '1rem' }}>
            {item.post_owner.name}
          </p>
        </div>
        <div className="card_lcm">
          <div className="card_lcm_list_icon">
            <svg
              onClick={() => (isLike ? unLikePost(item.id) : likePost(item.id))}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isLike && 'white'}
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-heart"
              style={{
                cursor: 'pointer',
              }}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-message-circle"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <img
              style={{ width: '18px', height: '21px' }}
              src="/img/paper-plane.svg"
              alt=""
            />
          </div>
          <p className="like_total">{like.length} Like</p>
        </div>
      </div>
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

export default CardItem;
