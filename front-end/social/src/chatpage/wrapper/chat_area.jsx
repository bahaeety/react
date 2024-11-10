import { useState } from 'react';
import '../chat.css';

export default function Chat_area({ messages, setMessages, socket }) {
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (event) => {
    if (event.key === 'Enter') {
      const newMessage = { message: inputMessage, sender: true };
      setMessages((prev) => [...prev, newMessage]);
      send();
      setInputMessage('');
    }
  };

  const send = () => {
    socket.emit('send_message', { message: inputMessage });
  };

  return (
    <div className="chat-area">
      <div className="chat-area-header">
        <div className="chat-area-title">CodePen Group</div>
      </div>

      <div className="chat-area-main">
        {Array.isArray(messages) &&
          messages.map((msg, index) => (
            <div className={`chat-msg ${msg.sender ? 'owner' : 'receiver'}`} key={index}>
              <div className="chat-msg-profile">
                <img
                  className="chat-msg-img"
                  src={
                    msg.sender
                      ? 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png'
                      : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png'
                  }
                  alt=""
                />
                <div className="chat-msg-date">{msg.sender ? 'Sent' : 'Received'}</div>
              </div>
              <div className="chat-msg-content">
                <div className="chat-msg-text">{msg.message}</div>
              </div>
            </div>
          ))}
      </div>

      <div className="chat-area-footer">
        <input
          type="text"
          onChange={(event) => setInputMessage(event.target.value)}
          onKeyPress={handleSendMessage}
          placeholder="Type something here..."
          value={inputMessage}
        />
      </div>
    </div>
  );
}
