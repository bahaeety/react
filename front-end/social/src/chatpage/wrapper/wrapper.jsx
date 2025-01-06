import Messg from  "./mesg"
import Chat_area from "./chat_area"
import Detail_area from "./Detail_area"
import { useState } from "react"
import "../chat.css"

export default function Wrapper({ messages, setMessages, socket }) {
  const [selectedContact, setSelectedContact] = useState(null);
    return (
      <>
        <Messg setSelectedContact={setSelectedContact}/>
        <Chat_area messages={messages} setMessages={setMessages} socket={socket} selectedContact={selectedContact}/>
        <Detail_area />
      </>
    );
  }
  