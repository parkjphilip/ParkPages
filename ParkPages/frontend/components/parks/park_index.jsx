import React from 'react';
import { Link, withRouter } from 'react-router';
import ParkIndexItem from './park_index_item';

class ParkIndex extends React.Component {
	constructor(props) {
		super(props);
	}

  componentWillMount(){
    this.props.fetchParks();
  }



  // componentWillReceiveProps(newProps) {
  // if (this.props.params.id !== newProps.params.id) {
  //   this.props.fetchPark(newProps.params.id);
  //   }
  // }

  render() {

    if (!this.props.parks.length) {
      return <div>loading...</div>;
    } else {
      return <ul className="index-container"> {this.props.parks.map(park => <ParkIndexItem park={park}/>)} </ul>;
    }
	}
}

export default withRouter(ParkIndex);
