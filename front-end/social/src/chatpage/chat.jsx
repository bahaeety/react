import io from 'socket.io-client';
import { useEffect, useState, createContext } from 'react';
import Header from './header';
import Wrapper from './wrapper/wrapper';
import './chat.css';

const socket = io.connect('http://localhost:5000');

export const  Chat_context = createContext();
function Chat() {
  const [profileImage, setProfileImage] = useState(null);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (received_message) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: received_message.message, sender: false },
      ]);
    });
    return () => socket.off('receive_message');
  }, []);

  return (
    <div className="app">
      <Chat_context.Provider value={[profileImage, setProfileImage]} >
      <Header />
      <div className="wrapper">
        <Wrapper socket={socket} messages={messages} setMessages={setMessages} />
      </div>
      </Chat_context.Provider>

    </div>
  );
}

export default Chat;
