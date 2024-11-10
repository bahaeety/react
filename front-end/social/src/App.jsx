//routing
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

//components
import Mycontent from './content';
import AuthForms from './form/form';
import Chat from './chatpage/chat';
import Home from './Mainpage/home';

//parent_routes
import Protectedroute from './session-checker/protected_route';
import {ChatProvider}  from './chatpage/chatProvider';

//css:
import './App.css'


const routers = createBrowserRouter([
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