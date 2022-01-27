import React from 'react';

function CardItem() {
  return (
    <div className="card_item">
      <img className="card_img" src="/img/rectangle 3.png" alt="" />
      <div className="card_footer">
        <div className="card_user">
          <img src="/img/rectangle 5.png" alt="" className="card_img_user" />
          <p style={{ color: '#fff', marginLeft: '1rem' }}>zayn</p>
        </div>
        <div className="card_lcm">
          <div className="card_lcm_list_icon">
            <img src="/img/heart.svg" alt="" />
            <img src="/img/message-circle.svg" alt="" />
            <img src="/img/paper-plane.svg" alt="" />
          </div>
          <p className="like_total">126.100 Like</p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
