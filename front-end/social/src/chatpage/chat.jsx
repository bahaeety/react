import io from 'socket.io-client'
import {useEffect} from "react"
import { useState } from 'react'
import Header from './header'
import Wrapper from './wrapper/wrapper'
import "./chat.css"

const socket = io.connect("http://localhost:5000")
function Chat(){
    const [message,setMessage] = useState([]) 
    const [messagereceived, setMessagereceived] = useState([])
    const send = ()=>{
        socket.emit("send_message",{
            message
        })
    }
    useEffect(() => {
        socket.on('message', (incomingMessage) => {
          setMessagereceived((prevMessages) => [...prevMessages, incomingMessage]);
        });
      
      
      });
    return (
      <div className="app">
            <Header />
        <div className="wrapper">
            <Wrapper/>
        </div>
      </div>
    )
}


export default Chat;