import "../chat.css";
import { useContext, useState } from "react";
import ChatContext from "../chatProvider";

export default function Chat_area() {
  const { message, setMessage, messagereceived, setMessagereceived, socket, send } = useContext(ChatContext);
  const [message_appeared, setMessageAppeared] = useState([]);

  const handleSendMessage = (event) => {
    if (event.key === 'Enter') {
      setMessageAppeared((prev) => [...prev, { message, sender: true }]); 
      send(); 
      setMessage('');     
    }
  };

  return (
    <>
      <div className="chat-area">
        <div className="chat-area-header">
          <div className="chat-area-title">CodePen Group</div>
        </div>
        
        <div className="chat-area-main">
        
{ Array.isArray(messagereceived)     && 
  messagereceived.map((msg, index) => (
    <div className="chat-msg receiver" key={index}>
      <div className="chat-msg-profile">
        <img
          className="chat-msg-img"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
          alt=""
        />
        <div className="chat-msg-date">Received: {msg}</div>
      </div>
      <div className="chat-msg-content">
        <div className="chat-msg-text">{msg}</div>
      </div>
    </div>
          ))}


          {Array.isArray(message_appeared) && message_appeared.map((msg, index) => (
            <div className={`chat-msg ${msg.sender ? "owner" : "receiver"}`} key={index}>
              <div className="chat-msg-profile">
                <img
                  className="chat-msg-img"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png"
                  alt=""
                />
                <div className="chat-msg-date">{msg.sender ? "Sent" : "Received"}</div>
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
            onChange={(event) => setMessage(event.target.value)} 
            onKeyPress={handleSendMessage} 
            placeholder="Type something here..." 
            value={message} 
          />
        </div>
      </div>
    </>
  );
}
