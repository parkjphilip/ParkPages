import React from 'react';
import { Link, withRouter } from 'react-router';

class ParkDetail extends React.Component {
	constructor(props) {
		super(props);
    // this.state = this.props.currentPark;
	}

  componentWillMount() {
    this.props.fetchPark(this.props.params);
  }

  // componentWillReceiveProps(newProps) {
  // if (this.props.params.id !== newProps.params.id) {
  //   this.props.fetchPark(newProps.params.id);
  //   }
  // }

	render() {
    // debugger
		return (
      <h1> park details here </h1>
		);
	}

}

export default withRouter(ParkDetail);
