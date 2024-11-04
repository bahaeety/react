import { createContext, useState, useEffect } from 'react'
import io from 'socket.io-client'

const ChatContext = createContext()

const socket = io.connect("http://localhost:5000")

export const ChatProvider = ({ children }) => {
    const [message, setMessage] = useState(null)
    const [messagereceived, setMessagereceived] = useState()

    const send = () => {
        socket.emit("send_message", {
            message
        })
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessagereceived(data.message)
        })
    }, [])

    return (
        <ChatContext.Provider value={{ message, setMessage, messagereceived, send, socket }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatContext
