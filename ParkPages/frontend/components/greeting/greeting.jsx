import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <div className="welcome-page" >
    <div className="welcome-header" >
      <nav className="login-signup">
        <Link to="/login" className="login" activeClassName="current">Login</Link>
        <Link to="/signup" className="signup" activeClassName="current">Sign Up</Link>
      </nav>
    </div>
    <div className="image-box">
      <img className="home-image" src="/images/homeimage.png" alt="Park Image" />
      <img className="home-logo" src="/images/ParkPages.png" alt="Logo" />
    </div>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
