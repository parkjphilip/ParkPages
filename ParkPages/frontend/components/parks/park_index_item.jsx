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
          <div className="index-image"></div>
        </div>
        <div className="index-item-info-container">
          <div className="index-name"> {this.props.park.name} </div>
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
