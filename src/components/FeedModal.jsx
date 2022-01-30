import React, { useEffect, useRef, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { API } from '../config/api';

function FeedModal({ show, onHide, item, like }) {
  const inputComment = useRef(null);
  const [comments, setComments] = useState([]);
  const [counter, setCounter] = useState(0);
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
        <img className="modal_feed_img" height="600" src={item.url} alt="" />
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
                <div className="card_user">
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
              <img src="/img/heart.svg" alt="" />
              <img src="/img/message-circle.svg" alt="" />
              <img src="/img/paper-plane.svg" alt="" />
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
