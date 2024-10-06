import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './form/form';
import Aside from './Mainpage/aside';
import Nav from './Mainpage/nav';

const Mycontent = () => {
  const [aut, setAuth] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Make sure to handle errors with try/catch
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/login');
        const isAuthenticated = response.data.authenticated; // Extract the value
        setAuth(isAuthenticated); // Set authentication state
        
        // Update content based on authentication state
        if (isAuthenticated) {
          setContent(
            <div className="row h-100">
              <div className="col-2 div-nav">
                <header className="App-header">
                  <Nav />
                </header>
              </div>
              <div className="col-8">
                <main>
                  {/* Add your main content here */}
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
      } catch (error) {
        console.error("Error fetching data:", error);
        setContent(<Form />); // Optionally set content to Form on error
      }
    };

    fetchData(); // Call the async function
  }, []); // No dependencies, this runs once on mount

  return <div className="App">{content}</div>;
};

export default Mycontent;
