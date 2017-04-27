import React from 'react';
import { Link, withRouter } from 'react-router';
import ParkIndexItem from './park_index_item';
import IndexParkMap from '../maps/index_park_map';

class ParkIndex extends React.Component {
	constructor(props) {
		super(props);
	}

  componentWillMount() {
    debugger
    this.props.fetchParks(this.props.location.query.query);
  }

  render() {
    if (!this.props.parks.length) {
      if (this.props.location.query.query.length > 0){

        return (
          <div className="enter-search-message">Search Results not found. Please try again!</div>
        );
      } else {

        return <div className="spinner"></div>;
      }
    }else {
      return (
        <div className="index-lower">
          <ul className="index-container">
            {this.props.parks.map(park => <ParkIndexItem key={park.id} park={park}/>)}
          </ul>
          <div className="index-map">
            <IndexParkMap parks={this.props.parks}/>
          </div>
        </div>
      );
    }
	}
}

export default withRouter(ParkIndex);
