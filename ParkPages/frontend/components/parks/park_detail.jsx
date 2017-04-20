import React from 'react';
import { Link, withRouter } from 'react-router';

class ParkDetail extends React.Component {
	constructor(props) {
		super(props);

	}

  componentWillMount() {
    this.props.fetchPark(this.props.parkId)
  }
	render() {
		return (
      <h1>we here </h1>
		);
	}

}

export default withRouter(ParkDetail);
