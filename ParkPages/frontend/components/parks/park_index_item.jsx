import React from 'react';
import { Link, withRouter } from 'react-router';
var Rating = require('react-rating');


class ParkIndexItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    let tag_string = "";
    for (var i = 0; i < this.props.park.tags.length; i++) {
      tag_string += this.props.park.tags[i].tag_name;
      if (i === (this.props.park.tags.length - 1)){
        break;
      }
      tag_string += ", ";
    }
		return (
      <li className="index-item-container">
        <div className="index-item-image-container">
          <img onClick={()=>this.props.router.push(`/parks/${this.props.park.id}`)} className="index-park-image" src={`${this.props.park.image_url}`}/>
        </div>
        <div className="index-item-info-container">
          <div className="index-name">
            <Link to={`/parks/${this.props.park.id}`} className="index-name-link">{this.props.park.name}</Link>
          </div>
          <div className="index-rating">
            <Rating
              className="review-index-stars"
              empty={<img height="28" width="28" src="images/star-empty.png"/>}
              full={<img height="28" width="28" src="images/star-full.png"/>}
              initialRate={this.props.park.avg_rating}
              start={0}
              stop={5}
              readonly={true}
            />
          </div>
          <div className="index-reviews">
            {this.props.park.num_ratings} reviews
          </div>
          <div className="index-tags">
            {`${tag_string}`}
          </div>
        </div>
        <div className="index-item-address-container">
          <div className="index-street"> {this.props.park.street} </div>
          <div className="index-city"> {this.props.park.city}, {this.props.park.zip_code}</div>
          <div className="index-phone-number"> {this.props.park.phone_number} </div>
        </div>
      </li>
		);
	}

}

export default withRouter(ParkIndexItem);
