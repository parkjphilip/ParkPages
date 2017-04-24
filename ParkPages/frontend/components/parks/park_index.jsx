import React from 'react';
import { Link, withRouter } from 'react-router';
import ParkIndexItem from './park_index_item';

class ParkIndex extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    if (!this.props.parks.length) {
      return <div>No results found</div>;
    } else {
      return <ul className="index-container"> {this.props.parks.map(park => <ParkIndexItem key={park.id} park={park}/>)} </ul>;
    }
	}
}

export default withRouter(ParkIndex);
