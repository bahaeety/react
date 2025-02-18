import "./chat.css"
import { useState, useRef,useEffect, useContext} from 'react';
import {Chat_context} from "./chat";
import axios from "axios";

export default function Header(){
  const [profileImage, setProfileImage] = useContext(Chat_context);
  const input_file = useRef(null)

  useEffect(()=>{
      const profile_picture = async()=>{
        const response = await axios.get('http://localhost:5000/user/image',{
          withCredentials: true,
        })
        if(response.data){
          console.log(response.data.image)
          setProfileImage(`data:image/png;base64,${response.data.image}`)
        }else{
          setProfileImage('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png');

        }
      }
      profile_picture()
  },[])

  const handleImageClick = ()=>{
    input_file.current.click()
  }

  const handleinput = (e)=>{
    const file = e.target.files[0];
  
    if (file) {
      handleFile(file);
    }
  }

  const handleFile = async (file) => {
    if (!file) return;
    const fd = new FormData();
    fd.append('profile', file);
  
    try {
      const upload = await axios.post('http://localhost:5000/user/image', fd, {
        withCredentials: true, 
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (ProgressEvent) => {
          const percentCompleted = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total);
          console.log(percentCompleted);
        },
      });
      
  
      const result = upload.data;
      console.log(result);
  
      if (result.image) {
        setProfileImage(`data:image/png;base64,${result.image}`);
      }
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };
  
    return (
      <>
      <div className="header">
    <div className="logo">
    </div>
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
    </div>
    <div className="user-settings">
      <div className="dark-light">
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </div>
      <div className="settings">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx={12} cy={12} r={3} />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      </div>
      <div>
      <img
        className="user-profile"
        src={profileImage || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"}
        alt="User Prodile"
        onClick={handleImageClick}
      />
       <input
                type="file"
                accept="image/*"
                ref={input_file}
                onChange={handleinput}
                style={{display: "none"}}
                name="profile"               
            />
      </div>
  
    </div>
  </div>
      </>
    )

}
