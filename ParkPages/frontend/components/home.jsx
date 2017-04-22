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


// <img className="home-image" src="/images/homeimage.png" alt="Park Image" />
//add this to css
