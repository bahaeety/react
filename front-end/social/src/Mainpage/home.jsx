import Aside from "./aside";
import Nav from "./nav";
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import session_cheker from '../session-checker/session-cheker';

function Home(){
  const socket = io.connect('http://localhost:5000');
  const [username, setUsername] = useState(null);
  useEffect( () => {
   const username_Session =  async () => {
     await session_cheker().then((res) => {
      if (res) {
        setUsername(res.username);
      }
    }
    );
  }
  username_Session();
  }, []);
  useEffect(() => {
    if(username !== null){
      console.log(username)
  socket.emit("user_connected",username);
    }
  }, [username]);
  
    return (
        <div className="row h-100">
            <div className="col-2 div-nav">
              <header className="App-header">
                <Nav />
              </header>
            </div>
            <div className="col-8">
              <main></main>
            </div>
            <div className="col-2 div-aside">
              <Aside />
            </div>
          </div>
    )
}
export default Home;