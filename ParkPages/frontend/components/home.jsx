import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchContainer from './search/search_container';

class Home extends React.Component {
	render() {
		return (

        <div className="image-box">
          <img className="home-logo" src="/images/ParkPages.png" alt="Logo" />
          <div className="home-search-container">
            <SearchContainer />
          </div>
        </div>

		);
	}
}

export default withRouter(Home);
