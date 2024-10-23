import { useNavigate , Link as A } from 'react-router-dom';


function Nav() {
  const navigate = useNavigate();

  const log_out = async () => {
    try {
      const response = await fetch("http://localhost:5000/user/logout", {
        method: 'GET',
        credentials: 'include', 
      });

      if (response.ok) {
        navigate("/login");  
      } else {
        const data = await response.json();
        console.error("Failed to log out: ", data);
      }

    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div className="d-flex flex-column h-100">
      <nav className="navbar vertical-nav p-2">
      <img
          width="100px"
          height="70px"
          src="./logo_social_-_Copy-removebg-preview.png"
          alt="Logo"
        />
        <A className="nav-link active" >
          <i className="fas fa-home"></i>Home
        </A>
        <A className="nav-link" >
          <i className="fas fa-user"></i>Profile
        </A>
        <A className="nav-link" >
          <i className="fas fa-search"></i>Explore
        </A>
        <A className="nav-link" >
          <i className="fas fa-users"></i>Friends
        </A>
        <A className="nav-link" >
          <i className="fas fa-bell"></i>Notifications
        </A>
        <A className="nav-link" to="/chat">
          <i className="fas fa-envelope"></i>Messages
        </A>
        <A className="nav-link" >
          <i className="fas fa-cog"></i>Settings
         </A>
        
        <A className="nav-link contact-link rounded-5" >
          <i className="fas fa-envelope"></i>Contact
        </A>
        <button className="nav-link" onClick={log_out}>
          <i className="fas fa-sign-out-alt"></i>Logout
        </button>
      </nav>
    </div>
  );
}

export default Nav;
