import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout}) => {
  const display = currentUser ? (
    <div>
      <Link className="todos-link" to="/todos">Todos</Link>
      <Link className="events-link" to="/events">Events</Link>
      <Link className="messages-link" to="/messages">Messages</Link>
      <p className="initials">{`${currentUser.first_name[0]}${currentUser.last_name[0]}`}</p>
      <button className="logout-button"onClick={logout}>Log Out</button>
      <div className="trial-banner"> You have 30 days left of your trail</div>
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
