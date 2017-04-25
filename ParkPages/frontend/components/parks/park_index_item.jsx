import React from 'react';
import { Link, withRouter } from 'react-router';

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
          <img className="show-park-image" src={`${this.props.park.image_url}`}/>
        </div>
        <div className="index-item-info-container">
          <div className="index-name">
            <Link to={`/parks/${this.props.park.id}`} className="index-name-link">{this.props.park.name}</Link>
          </div>
          <div className="index-rating"> rating here </div>
          <div className="index-reviews"> number of reviews here </div>
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
