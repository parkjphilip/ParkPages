import React from 'react';
import { Link, withRouter } from 'react-router';

class Home extends React.Component {
	render() {
		return (

        <div className="image-box">
          <img className="home-logo" src="/images/ParkPages.png" alt="Logo" />
          <div className="home-search-container">
            <input type="text" className="home-search" placeholder="Find" />
            <button className="home-search-button">
              <img className="home-search-glass" src="/images/glass.png" />
            </button>
          </div>
        </div>

		);
	}
}

export default withRouter(Home);


// <form onSubmit = this.handlesubmit >
//   <input typye=text value = ? >
//   <input type=submit >
// </form>
//
// handlesubmit(e){
//   this.props.fetchParks(e.target.value).then(() => this.props.router,push(/search)
// }
