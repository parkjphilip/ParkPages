import React from 'react';
import { Link, withRouter } from 'react-router';


class Header extends React.Component {

  render() {

    let headerStatus = this.props.location.pathname !== '/' ? "solid" : "transparent";
    // stsaus = path !== '/' ? "solid" : "transparent"

    if(this.props.currentUser){
      return(
        <div className={`header ${headerStatus}`}>
          <div className={`header-left ${headerStatus}`}>
            <img className={`logo ${headerStatus}`} src="/images/ParkPages.png" alt="Logo" />
          </div>
          <div className="header-middle">
          wefwefeorqhfowefjowejfofheufuewfhueiwfhueiwhfuiewhfuiewfhuiewhfuiewfhui
          </div>
          <div className="header-right">
            <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
            <button className="header-button" onClick={this.props.logout}>Log Out</button>
          </div>
        </div>
      );
    }else{
      return (
        <div className={`header ${headerStatus}`}>
          <div className={`header-left ${headerStatus}`}>
            <img className={`logo ${headerStatus}`} src="/images/ParkPages.png" alt="Logo" />
          </div>
          <div className="header-middle">
          </div>
          <div className="header-right">
            <nav className="login-signup">
              <Link to="/login" className="login" activeClassName="current">Login</Link>
              <Link to="/signup" className="signup" activeClassName="current">Sign Up</Link>
            </nav>
          </div>
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
