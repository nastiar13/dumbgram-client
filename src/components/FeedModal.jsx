import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FeedModal({ show, onHide, item, like }) {
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
          <div className="card_lcm modal_lcm">
            <div className="comment_lcm_list_icon">
              <img src="/img/heart.svg" alt="" />
              <img src="/img/message-circle.svg" alt="" />
              <img src="/img/paper-plane.svg" alt="" />
            </div>
            <p className="like_total">{like} Like</p>
          </div>
          <input
            type="text"
            className="comment_input"
            placeholder="Comments.."
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default FeedModal;
