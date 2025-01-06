import './style.css'
import session_cheker from '../session-checker/session-cheker';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import form_api from '../api/form_api';

const AuthForms = () => {
  const [Action, setAction] = useState("Sign Up");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ Name: '',Username: '' ,Email: '' ,Tel:'' ,Password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log('Form submitted. Action:', Action);
    console.log('Form data:', formData);

    formData.Name = formData.Name.trim();
    formData.Username = formData.Username.trim();
    formData.Email = formData.Email.trim();
    formData.Tel = formData.Tel.trim();
    formData.Password = formData.Password.trim();

    try {
      let response;
      switch (Action) {
        case 'Sign Up':
          if(formData.Name === '' || formData.Username === '' || formData.Email === '' || formData.Tel === '' || (formData.Password === '' || formData.Password.length < 8 || formData.Password.length > 16 ) ){
            console.error('Please fill all the fields');
            break;
          }
        response = await form_api.post('/register', formData , {
          withCredentials: true,
        });
  
      
        break;
        case 'Login':
          if(formData.Email === '' || formData.Password === ''){
            console.error('Please fill all the fields');
            break;
          }
          console.log('Login form submitted : ', formData);
          response = await  form_api.post('/login', formData , { withCredentials: true });
    
            navigate('/home');
            console.error(response.data || 'Login failed');
          
          break;
          default:
            console.error('Invalid action');
          return;

      } 
      console.log('Response from server:', response.data);
      }
  
     catch (error) {
      console.error('Error:', error.message);
    }
    session_cheker();

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