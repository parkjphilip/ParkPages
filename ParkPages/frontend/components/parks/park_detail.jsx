import React from 'react';
import { Link, withRouter } from 'react-router';

class ParkDetail extends React.Component {
	constructor(props) {
		super(props);
	}

  componentWillMount() {
    this.props.fetchPark(this.props.parkId);
  }

  componentWillReceiveProps(newProps) {
  if (this.props.params.id !== newProps.params.id) {
    this.props.fetchPark(newProps.params.id);
    }
  }

	render() {
		return (
      <h1>we here </h1>
		);
	}

}

export default withRouter(ParkDetail);
