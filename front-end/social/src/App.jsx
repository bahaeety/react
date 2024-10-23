import { BrowserRouter as Router, Route, Routes, Navigate, RouterProvider } from 'react-router-dom';
import Mycontent from './content';
import AuthForms from './form/form';
import Chat from './chatpage/chat';
import Home from './Mainpage/home';
import { createBrowserRouter } from 'react-router-dom';
import './App.css'

const routers = createBrowserRouter([
  {
    path: '/login',  element: <AuthForms />
  },
  {
    path: '/', element: <Mycontent /> 
  },
  {
    path: '/home', element: <Home />
  },
  {
    path: '/chat', element: <Chat />
  },
  
])

function App() {
  return (
    <RouterProvider router={routers}/>
  );
}

export default App;