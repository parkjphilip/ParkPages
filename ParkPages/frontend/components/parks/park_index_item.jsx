import React from 'react';
import { Link, withRouter } from 'react-router';

class ParkIndexItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <li className="index-item-container">
        <div className="index-item-image-container">
          <img className="show-park-image" src={`${this.props.park.image_url}`}/>
        </div>
        <div className="index-item-info-container">
          <div className="index-name">
            <Link to={`/parks/${this.props.park.id}`}>{this.props.park.name}</Link>
          </div>
          <div className="index-rating"> rating here </div>
          <div className="index-reviews"> number of reviews here </div>
        </div>
        <div className="index-item-address-container">
          <div className="index-street"> {this.props.park.street} </div>
          <div className="index-city"> {this.props.park.city} {this.props.park.phone_number} {this.props.park.zip_code}</div>
        </div>
      </li>

		);
	}

}

export default withRouter(ParkIndexItem);
