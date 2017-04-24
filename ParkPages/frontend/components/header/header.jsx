import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchContainer from '../search/search_container';


class Header extends React.Component {

  render() {

    let headerStatus = this.props.location.pathname !== '/' ? "solid" : "transparent";
    // stsaus = path !== '/' ? "solid" : "transparent"

    if(this.props.currentUser){
      return(
        <div className={`header ${headerStatus}`}>
          <div className={`header-left ${headerStatus}`}>
            <img className={`logo ${headerStatus}`} onClick={()=>{this.props.router.push("/");}} src="/images/ParkPages.png" alt="Logo" />
          </div>
          <div className="header-middle">
            <div className="home-search-container">
                <SearchContainer />
            </div>
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
            <img className={`logo ${headerStatus}`} onClick={()=>{this.props.router.push("/");}} src="/images/ParkPages.png" alt="Logo" />
          </div>
          <div className="header-middle">
            <div className="home-search-container">
              <SearchContainer />
            </div>
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

export default withRouter(Header);
