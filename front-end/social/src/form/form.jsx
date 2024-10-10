import './style.css'

import { useState } from 'react';

const AuthForms = () => {
  const [Action, setAction] = useState("Sign Up");

  const [formData, setFormData] = useState({ Name: '',Username: '' ,Email: '' ,Tel:'' ,Password: '' });

  const handleSubmit = async (e) => {
      e.preventDefault(); 
      console.log('Form submitted. Action:', Action);
      console.log('Form data:', formData);
         if(Action === 'Sign Up'){
          const response = await fetch('http://localhost:5000/user/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData)
          }).then(()=>{
            console.log('data submited')
          });

          const result = await response.json();
          console.log('Response from server:', result);
        }
        else if (Action === 'Login') {
          try {
              const response = await fetch('http://localhost:5000/user/login', {
                  method: "POST",
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      Email: formData.Email,
                      Password: formData.Password
                  }),
                  credentials: 'include' // Include credentials if using sessions
              });
      
              // Check if the response is okay
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
      
              // Now you can safely call response.json()
              const result = await response.json();
              console.log('Login Successful:', result.session);
      
          } catch (error) {
              console.error('There was an error during login:', error);
          }
      }
      
  };

  return (
    <form onSubmit={handleSubmit} method='post' >
    <div className="container">
      <div className="header">
        <div className="text">{Action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className={Action === "Login" ? "d-none" : "input"}>
          <i className="fas fa-user"></i>
          <input type="text" name='Name'value={formData.Name} placeholder='Name' onChange={(e)=>{setFormData({...formData , Name: e.target.value })}}/>
          <span class="input-logo">@</span>
          <input type='text' name='Username' value={formData.Username} placeholder='Username' onChange={(e)=>{setFormData({...formData , Username: e.target.value })}} />
        </div>
        <div className="input">
          <i className="fas fa-envelope"></i>
          <input type="email" name='Email' placeholder='Email' value={formData.Email} onChange={(e)=>{setFormData({...formData , Email: e.target.value })}} />
        </div>
        <div className={Action === "Login" ? "d-none" : "input"}>
        <i className="fas fa-phone"></i>
        <input type="tel" name='Tel' placeholder='tel' value={formData.Tel} onChange={(e)=>{setFormData({...formData , Tel: e.target.value })}} />
        </div>
        <div className="input">
          <i className="fas fa-lock"></i>
          <input type="password" name='Password' placeholder='Password' value={formData.Password} onChange={(e)=>{setFormData({...formData , Password: e.target.value })}}/>
        </div>
      </div>
      <div className={Action === "Sign Up" ? "d-none forgot-password" : "forgot-password"}>Forgot password ? <span>Click here</span></div>
      <div className="submit-container">
        <button type="submit" className= "submit" >
             {Action}
        </button>
        <button  className="submit gray" onClick={(e) => {e.preventDefault();  Action === "Login" ? setAction("Sign Up"): setAction("Login")}}>
          Switch
        </button>

      </div>
    </div>
    </form>

  );
};

export default AuthForms;