import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="d-flex">
        <nav className="navbar vertical-nav p-2">
        <img
          width="100px"
          height="70px"
          src="./logo_social_-_Copy-removebg-preview.png"
          alt="Logo"
        />
        <div className="nav flex-column mt-5">
          <a className="nav-link active" href="#">
            <i className="fas fa-home"></i>Home
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
          <a className="nav-link" href="#">
            <i className="fas fa-sign-out-alt"></i>Logout
          </a>
          <a className="nav-link contact-link rounded-5" href="#">
            <i className="fas fa-envelope"></i>Contact
          </a>
        </div>
      </nav>
          </div>
      </header>
    </div>
  );
}

export default App;
