import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout}) => {
  const display = currentUser ? (
    <div>
      <p className="initials">Hello, {currentUser.first_name}</p>
      <button className="logout-button"onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Login</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <img className="nav-bar-logo" src={window.images.login}/>
      <div>
       { display }
       </div>
    </header>
  );
};
