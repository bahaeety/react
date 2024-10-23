import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import session_checker from './session-checker/session-cheker';


const Mycontent = () => {
const navigate = useNavigate(); 

  useEffect(() => {
    const checkSession = async () => {
      const isAuthenticated = await session_checker();
      if (isAuthenticated !== null) {
        console.log("deja une session")
        navigate('/home');
      } else {
        
        navigate('/login'); 
      }
    };

    checkSession();
  }, [navigate]);


};

export default Mycontent;
