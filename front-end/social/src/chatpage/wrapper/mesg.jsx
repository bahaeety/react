import "../chat.css"

export default  function Messg({setSelectedContact}){
  const contacts = [
    { name: "Madison Jones", profile: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" },
    { name: "Miguel Cohen", profile: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png" },
  ];
    return (
        <>
        <div className="conversation-area">
        {contacts.map((contact, index) => (
        <div
          key={index}
          className="msg"
          onClick={() => setSelectedContact(contact)} 
        >
          <img className="msg-profile" src={contact.profile} alt="" />
          <div className="msg-detail">
            <div className="msg-username">{contact.name}</div>
            <div className="msg-content">
              <span className="msg-message">Click to start chat</span>
            </div>
          </div>
        </div>
      ))}
     
    </div>
        </>
    )
}