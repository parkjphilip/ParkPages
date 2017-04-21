import React from 'react';
import { Link, withRouter } from 'react-router';

class ParkIndexItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <li> {this.props.park.name} </li>
		);
	}

}

export default withRouter(ParkIndexItem);
