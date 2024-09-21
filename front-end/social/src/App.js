import './App.css';
import { useState } from 'react';

import Form from '../src/form/form';
import Aside from './Mainpage/aside';
import Nav from './Mainpage/nav';
function App() {
   let [aut,setAuth] = useState(false);
   let content;
   if(aut){
    content = {
     content: <div  className="row">
          <div className="col-2 div-nav">
            <header className="App-header">
              <Nav/>
            </header>
          </div>
          <div className="col-8">
             <main>

             </main>

          </div>
          <div className="col-2 div-aside">

            <Aside/>

            </div>
          </div>
    }
    }else{
      content = <Form />
   } 

  return (
   <Form/>
  );
}

export default App;
