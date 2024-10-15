function Nav() {
  const log_out = async () => {
    try {
      const response = await fetch("http://localhost:5000/user/logout", {
        method: 'GET',
        credentials: 'include', 
      });
      const data = await response.json();
      
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
        <a className="nav-link active" href="#">
          <i className="fas fa-home"></i>Home
        </a>
        <a className="nav-link" href="#">
          <i className="fas fa-user"></i>Profile
        </a>
        <a className="nav-link" href="#">
          <i className="fas fa-search"></i>Explore
        </a>
        <a className="nav-link" href="#">
          <i className="fas fa-users"></i>Friends
        </a>
        <a className="nav-link" href="#">
          <i className="fas fa-bell"></i>Notifications
        </a>
        <a className="nav-link" href="#">
          <i className="fas fa-envelope"></i>Messages
        </a>
        <a className="nav-link" href="#">
          <i className="fas fa-cog"></i>Settings
        </a>
        <a className="nav-link" href="#" onClick={log_out}>
          <i className="fas fa-sign-out-alt"></i>Logout
        </a>
        <a className="nav-link contact-link rounded-5" href="#">
          <i className="fas fa-envelope"></i>Contact
        </a>
      </nav>
    </div>
  );
}

export default Nav;
