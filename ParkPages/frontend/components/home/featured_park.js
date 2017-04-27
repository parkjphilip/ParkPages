import React from 'react';
import { Link, withRouter } from 'react-router';
var Rating = require('react-rating');


class FeaturedPark extends React.Component {

	render() {
		return (
      <div>
        <div className="featured-park">
          <div className="featured-name"> {this.props.park.name} </div>
          <Rating
            className="featured-stars"
            empty={<img height="28" width="28" src="images/star-empty.png"/>}
            full={<img height="28" width="28" src="images/star-full.png"/>}
            initialRate={this.props.park.avg_rating}
            start={0} stop={5} readonly={true} fractions={2}
          />
          <div className="featured-reviews">{this.props.park.num_ratings} total reviews</div>
          <img height="250" width="350" src={this.props.park.image_url}/>
        </div>
      </div>
		);
	}
}

export default withRouter(FeaturedPark);
