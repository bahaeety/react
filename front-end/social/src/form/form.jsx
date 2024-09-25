import { useState } from 'react';
import './style.css'




const AuthForms = () => {
  const [Action, setAction] = useState("Sign Up");

  const [formData, setFormData] = useState({ Name: '',Username: '' ,Email: '' , Password: '' });

  const handleSubmit = async (e) => {
      e.preventDefault(); 

      try {
          const response = await fetch('http://localhost:5000/user/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          });

          const result = await response.json();
          console.log('Response from server:', result);
      } catch (error) {
          console.error('Error submitting form:', error);
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
          <input type="text" name='Name' placeholder='Name' onChange={(e)=>{setFormData({...formData , Name: e.target.value })}}/>
          <span class="input-logo">@</span>
          <input type='text' name='Username' placeholder='Username' onChange={(e)=>{setFormData({...formData , Username: e.target.value })}} />
        </div>
        <div className="input">
          <i className="fas fa-envelope"></i>
          <input type="email" name='Email' placeholder='Email' onChange={(e)=>{setFormData({...formData , Email: e.target.value })}} />
        </div>
        <div className="input">
          <i className="fas fa-lock"></i>
          <input type="password" name='Password' placeholder='Password' onChange={(e)=>{setFormData({...formData , Password: e.target.value })}}/>
        </div>
      </div>
      <div className={Action === "Sign Up" ? "d-none forgot-password" : "forgot-password"}>Forgot password ? <span>Click here</span></div>
      <div className="submit-container">
        <button type="submit" className={Action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>
          Sign Up
        </button>
        <button type="submit" className={Action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>
          Log In
        </button>

      </div>
    </div>
    </form>

  );
};

export default AuthForms;
