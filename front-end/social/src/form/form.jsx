import './style.css'

import { useState } from 'react';

const AuthForms = () => {
  const [Action, setAction] = useState("Sign Up");

  const [formData, setFormData] = useState({ Name: '',Username: '' ,Email: '' , Password: '' });

  const handleSubmit = async (e) => {
      e.preventDefault(); 
      console.log('Form submitted. Action:', Action);
      console.log('Form data:', formData);
      try {
          const response = await fetch('http://localhost:5000/user/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          }).then(()=>{
            console.log('data submited')
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
          <input type="text" name='Name'value={formData.Name} placeholder='Name' onChange={(e)=>{setFormData({...formData , Name: e.target.value })}}/>
          <span class="input-logo">@</span>
          <input type='text' name='Username' value={formData.Username} placeholder='Username' onChange={(e)=>{setFormData({...formData , Username: e.target.value })}} />
        </div>
        <div className="input">
          <i className="fas fa-envelope"></i>
          <input type="email" name='Email' placeholder='Email' value={formData.Email} onChange={(e)=>{setFormData({...formData , Email: e.target.value })}} />
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
        <button type="submit" className="submit gray" onClick={() => Action === "Login" ? setAction("Sign Up"): setAction("Login")}>
          Switch
        </button>

      </div>
    </div>
    </form>

  );
};

export default AuthForms;