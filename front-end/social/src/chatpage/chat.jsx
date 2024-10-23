import io from 'socket.io-client'
import {useEffect} from "react"
import { useState } from 'react'
const socket = io.connect("http://localhost:5000")
function Chat(){
    const [message,setMessage] = useState(null) 
    const [messagereceived, setMessagereceived] = useState()
    const send = ()=>{
        socket.emit("send_message",{
            message
        })
    }
    useEffect(()=>{
    socket.on("receive_message",(data)=>{
        setMessagereceived(data.message)
    })
    },[socket])
    return (
        <div className="chat">
            <div className="chat-header">
                <h2>Chat</h2>
            </div>
            <input placeholder="Message..." onChange={(event)=>{
                setMessage(event.target.value);
            }}/>
            <button onClick={send}>Send Message</button>
            <h2>Message:</h2>
            {messagereceived}
        </div>
    )
}


export default Chat;