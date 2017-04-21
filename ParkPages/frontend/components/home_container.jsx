import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeContainer extends React.Component {
	render() {
		return (
      <div className="image-box">
        <img className="home-image" src="/images/homeimage.png" alt="Park Image" />
        <img className="home-logo" src="/images/ParkPages.png" alt="Logo" />
      </div>
		);
	}

}

export default withRouter(HomeContainer);
