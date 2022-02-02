import React, { useEffect, useRef, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { API } from '../config/api';

function FeedModal({
  show,
  onHide,
  item,
  like,
  getLike,
  setIsLikeProps,
  isLike,
}) {
  const inputComment = useRef(null);
  const [comments, setComments] = useState([]);
  const [counter, setCounter] = useState(0);

  const likePost = async (postId) => {
    try {
      await API.post('/like/' + postId);
      getLike();

      setIsLikeProps(true);
    } catch (error) {
      console.log(error);
    }
  };
  const unLikePost = async (postId) => {
    try {
      await API.delete('/like/' + postId);
      getLike();

      setIsLikeProps(false);
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
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getComments = async () => {
    try {
      setComments((await API.get('/comment/' + item.id)).data.response);
    } catch (error) {
      console.log(error);
    }
  };
  const addComment = async (e) => {
    try {
      if (e.key === 'Enter') {
        await API.post('/comment/' + item.id, {
          comment: inputComment.current.value,
        });
        inputComment.current.value = '';
        setCounter(counter + 1);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getComments();
  }, [counter]);
  useEffect(() => {
    getIsLike();
  }, []);
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdropClassName="modalContainer"
    >
      <Modal.Body className="modal_feed">
        <img
          loading="lazy"
          className="modal_feed_img"
          height="600"
          src={item.url}
          alt=""
        />
        <p
          onClick={onHide}
          style={{
            color: 'white',
            position: 'absolute',
            right: '10px',
            cursor: 'pointer',
            zIndex: '100',
          }}
        >
          X
        </p>
        <div className="comment_section">
          <div className="card_user">
            <Link to={`/user/${item.post_owner.id}`}>
              <img
                loading="lazy"
                src={item.post_owner.profile_picture}
                alt=""
                className="card_img_user"
              />
            </Link>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p
                style={{
                  color: '#fff',
                  marginLeft: '1rem',
                  marginBottom: 0,
                  display: 'block',
                }}
              >
                {item.post_owner.name}
              </p>
              <p className="caption">{item.caption}</p>
            </div>
          </div>
          <div className="horizontal_line"></div>

          <div className="comment">
            {comments.map((comm) => {
              return (
                <div key={comm.id} className="card_user">
                  <Link to={`/user/${item.post_owner.id}`}>
                    <img
                      src={comm.user_comment.profile_picture}
                      alt=""
                      className="card_img_user"
                    />
                  </Link>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p
                      style={{
                        color: '#fff',
                        marginLeft: '1rem',
                        marginBottom: 0,
                        display: 'block',
                      }}
                    >
                      {comm.user_comment.name}
                    </p>
                    <p className="caption">{comm.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="card_lcm modal_lcm">
            <div className="comment_lcm_list_icon">
              <svg
                onClick={() =>
                  isLike ? unLikePost(item.id) : likePost(item.id)
                }
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
            <p className="like_total">{like} Like</p>
          </div>
          <input
            ref={inputComment}
            type="text"
            className="comment_input"
            placeholder="Comments.."
            onKeyPress={(e) => addComment(e)}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default FeedModal;
