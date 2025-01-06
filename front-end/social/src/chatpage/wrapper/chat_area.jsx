import { useState , useContext} from 'react';
import '../chat.css';
import {Chat_context} from "../chat";
export default function Chat_area({ messages, setMessages, socket, selectedContact  }) {
  const [inputMessage, setInputMessage] = useState('');
  const [profileImage, setProfileImage] = useContext(Chat_context);

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
      <div className="chat-area-title">
                 <img
                  className="chat-msg-img"
                  src={ selectedContact?.profile || "default-sender.png"}
                  alt=""
                />          {selectedContact ? selectedContact.name : "Select a contact to chat"}
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
                      ?profileImage 
                      : selectedContact?.profile || "default-sender.png"
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
