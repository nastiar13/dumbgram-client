import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';

function ChatList({ data, setAnyData }) {
  const [state] = useContext(UserContext);
  useEffect(() => {}, [data]);
  return (
    <div>
      {data.map((conv) => {
        const data = conv.from_user === state.user.id ? conv.to : conv.from;

        return (
          <div onClick={() => setAnyData(conv.id, data)} key={conv.id}>
            <div className="conversations">
              <img
                src={data.profile_picture}
                className="card_img_user profile_pict_chat"
                alt="profile_picture"
              />
              <div className="conversation_detail">
                <h5 className="conv_name">{data.name}</h5>
                <p className="last_msg">hi</p>
              </div>
              <div className="unread_msg">1</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ChatList;
