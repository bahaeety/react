import './App.css';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './form/form';
import Aside from './Mainpage/aside';
import Nav from './Mainpage/nav';

const MyComponent = () => {
  const [aut, setAuth] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (aut) {
      setContent(
        <div className="row h-100">
          <div className="col-2 div-nav">
            <header className="App-header">
              <Nav />
            </header>
          </div>
          <div className="col-8">
            <main>
            </main>
          </div>
          <div className="col-2 div-aside">
            <Aside />
          </div>
        </div>
      );
    } else {
      setContent(<Form />);
    }
  }, [aut]);

  return content;
};

export default MyComponent;
