import React, { useState } from 'react';

function Message() {
  const [message, setMessage] = useState('');
  if (!message) {
    return (
      <div>
        <h1
          style={{
            color: '#fff',
            textAlign: 'center',
            marginTop: '30%',
          }}
        >
          No Message
        </h1>
      </div>
    );
  }
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        className="chat_input"
        placeholder="Send Message"
      />
    </div>
  );
}

export default Message;
