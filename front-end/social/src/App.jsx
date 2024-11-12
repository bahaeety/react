//css:
import './App.css'
//routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//components
import Mycontent from './content';
import AuthForms from './form/form';
import Chat from './chatpage/chat';
import Home from './Mainpage/home';
import ContactSupport from './contact/Contact';

//parent_routes
import Protectedroute from './session-checker/protected_route';
import {ChatProvider}  from './chatpage/chatProvider';




const routers = createBrowserRouter([
  {
   path: '/contact', element: <ContactSupport/>
  },
  {
    path: '/login',  element: <AuthForms />
  },
  {
    path: '/', element:<Protectedroute><Mycontent /> </Protectedroute> 
  },
  {
    path: '/home', element:<Protectedroute><Home /></Protectedroute> 
  },
  {
    path: '/chat', element: 
    <Protectedroute>
        <Chat />
    </Protectedroute>
  },
  
])

function App() {
  return (
    <RouterProvider router={routers}/>
  );
}

export default App;