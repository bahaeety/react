import { BrowserRouter as Router, Route, Routes, Navigate, RouterProvider } from 'react-router-dom';
import Mycontent from './content';
import AuthForms from './form/form';
import Chat from './chatpage/chat'
import { createBrowserRouter } from 'react-router-dom';

const routers = createBrowserRouter([
  {
    path: '/login',  element: <AuthForms />
  },
  {
    path: '/home', element: <Mycontent /> 
  },
  {
    path: '/chat', element: <Chat />
  },
  {
    path: '*', element: <Navigate to="/login" />
  },
])

function App() {
  return (
    <RouterProvider router={routers}/>
  );
}

export default App;