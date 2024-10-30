import Messg from  "./mesg"
import Chat_area from "./chat_area"
import Detail_area from "./Detail_area"
import "../chat.css"

export default function Wrapper(){
    return(
        <>
        <Messg/>
        <Chat_area/>
        <Detail_area/>

        </>
    )
}