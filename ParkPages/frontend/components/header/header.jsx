import React from 'react';
import { Link, withRouter } from 'react-router';


class Header extends React.Component {

  render() {

    let headerStatus = this.props.location.pathname !== '/' ? "solid" : "transparent";
    // stsaus = path !== '/' ? "solid" : "transparent"

    if(this.props.currentUser){
      return(
        <hgroup className={`header-group ${headerStatus}`}>
          <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
          <button className="header-button" onClick={this.props.logout}>Log Out</button>
        </hgroup>
      );
    }else{
      return (
        <div className={`header-group ${headerStatus}`} >
          <nav className="login-signup">
            <Link to="/login" className="login" activeClassName="current">Login</Link>
            <Link to="/signup" className="signup" activeClassName="current">Sign Up</Link>
          </nav>
        </div>
      );

    }


  }
}

// const personalGreeting = (currentUser, logout) => (
// 	<hgroup className="header-group">
//     <h2 className="header-name">Hi, {currentUser.username}!</h2>
//     <button className="header-button" onClick={logout}>Log Out</button>
// 	</hgroup>
// );
//
// const Header2 = ({ currentUser, logout }) => (
//   currentUser ? personalGreeting(currentUser, logout) : <sessionLinks/>
// );

export default withRouter(Header);
