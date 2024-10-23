import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import session_checker from './session-checker/session-cheker';

import Aside from './Mainpage/aside';
import Nav from './Mainpage/nav';


const Mycontent = () => {
  const [content, setContent] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const checkSession = async () => {
      const isAuthenticated = await session_checker();
      if (isAuthenticated) {
        setContent(
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
        );
      } else {
        
        navigate('/login'); 
      }
    };

    checkSession();
  }, [navigate]);

  

  return <>{content}</>;
};

export default Mycontent;
