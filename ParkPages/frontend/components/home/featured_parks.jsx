import React from 'react';
import { Link, withRouter } from 'react-router';
var Rating = require('react-rating');
import FeaturedPark from './featured_park';

class FeaturedParks extends React.Component {

  componentWillMount(){
    this.props.fetchFeaturedParks("");
  }

	render() {
    if (Object.keys(this.props.parks).length === 0){
      return <div></div>;
    } else {
		return (
      <div className="featured-parks">
        <div className="featured-title">Check out our Featured Parks!</div>
        <div className="upper-featured">
          <FeaturedPark park={this.props.parks[1]} />
          <FeaturedPark park={this.props.parks[2]} />
          <FeaturedPark park={this.props.parks[3]} />
        </div>
        <div className="lower-featured">
          <FeaturedPark park={this.props.parks[4]} />
          <FeaturedPark park={this.props.parks[5]} />
          <FeaturedPark park={this.props.parks[6]} />
        </div>
      </div>
		);
	 }
 }
}

export default withRouter(FeaturedParks);
