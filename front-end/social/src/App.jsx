import './App.css';
import { useState, useEffect } from 'react';
import Form from './form/form';
import Aside from './Mainpage/aside';
import Nav from './Mainpage/nav';

import session_checker from './session-checker/session-cheker';

const Mycontent = () => {
  const [auth, setAuth] = useState(null); 
  const [content, setContent] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const isAuthenticated = await session_checker();
      if (isAuthenticated) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    };

    checkSession();
  }, []);

  
  useEffect(() => {
    if (auth === true) {
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
    } else if (auth === false) {
      setContent(<Form />);
    }
  }, [auth]); 

  return <div className="App">{content}</div>;
};

export default Mycontent;
