import React from 'react';
import { Link, withRouter } from 'react-router';
var Rating = require('react-rating');


class FeaturedPark extends React.Component {

	render() {
		return (
      <div>
        <div className="featured-park">
          <img className="featured-image cursor-pointer" height="250" width="350" onClick={()=>{this.props.router.push(`/parks/${this.props.park.id}`);}} src={this.props.park.image_url}/>
          <div className="featured-lower">
            <div className="featured-detail-1 cursor-pointer" onClick={()=>{this.props.router.push(`/parks/${this.props.park.id}`);}}>
              {this.props.park.name} - {this.props.park.city}, {this.props.park.state}
            </div>
            <div className="featured-detail-2">
              <Rating
                className="featured-stars"
                empty={<img height="20" width="20" src="images/star-empty.png"/>}
                full={<img height="20" width="20" src="images/star-full.png"/>}
                initialRate={this.props.park.avg_rating}
                start={0} stop={5} readonly={true} fractions={2}
              /> - {this.props.park.num_ratings} reviews
            </div>
          </div>
        </div>
      </div>
		);
	}
}

export default withRouter(FeaturedPark);
