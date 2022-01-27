import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FeedModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdropClassName="modalContainer"
    >
      <Modal.Body className="modal_feed">
        <img
          className="modal_feed_img"
          height="600"
          src="/img/rectangle 3.png"
          alt=""
        />
        <div className="comment_section">
          <div className="card_user">
            <Link to="/user/1">
              <img
                src="/img/rectangle 5.png"
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
                zayn
              </p>
              <p className="caption">To Begin Again..</p>
            </div>
          </div>
          <div className="horizontal_line"></div>
          <div className="card_lcm modal_lcm">
            <div className="comment_lcm_list_icon">
              <img src="/img/heart.svg" alt="" />
              <img src="/img/message-circle.svg" alt="" />
              <img src="/img/paper-plane.svg" alt="" />
            </div>
            <p className="like_total">126.100 Like</p>
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
