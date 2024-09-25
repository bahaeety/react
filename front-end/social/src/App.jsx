import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './form/form';
import Aside from './Mainpage/aside';
import Nav from './Mainpage/nav';

const MyComponent = () => {
  const [aut, setAuth] = useState(false);
  const [content, setContent] = useState(null);

  const [message, setMessage] = useState('');

  useEffect(() => {
    
    axios.get('http://localhost:5000/api').then((data)=>{
      setMessage(data.data.message)
    }).catch(()=>{
      setMessage('Error')
    })
  }, []);

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
      setContent(<Form/>);
    }
  }, [aut]);

  return <div className="App">
  <h1>{message}</h1>
  {content}
</div> ;
};

export default MyComponent;
