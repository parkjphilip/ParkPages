import React from 'react';
import { Link, withRouter } from 'react-router';
import ParkIndexItem from './park_index_item';
import IndexParkMap from '../maps/index_park_map';

class ParkIndex extends React.Component {
	constructor(props) {
		super(props);
	}

  componentWillMount() {
    this.props.fetchParks(this.props.location.query.query);
  }

  render() {

    if (!this.props.parks.length && this.props.location.query.query.length > 0) {
      return (
        <div className="enter-search-message">Search Results not found. Please try again!</div>
      );
    } else if (!this.props.parks.length) {
      return <div className="spinner"></div>;
    } else {
      return (
        <div>
          <ul className="index-container">
            {this.props.parks.map(park => <ParkIndexItem key={park.id} park={park}/>)}
          </ul>
          <div className="show-map">
            <IndexParkMap parks={this.props.parks}/>
          </div>
        </div>
      );
    }
	}
}

export default withRouter(ParkIndex);


//
// if (!this.props.parks.length) {
//   if (this.props.location.query.query.length > 0){
//
//     return (
//       <div className="enter-search-message">Search Results not found. Please try again!</div>
//     );
//   } else {
//
//     return <div className="spinner"></div>;
//   }

//
// if (this.props.parks){
//
//   // if (this.props.parks.)
//   return (
//     <div className="spinner"></div>
//   );
// } else {
//   return <div className="enter-search-message">Search Results not found. Please try again!</div>;
// }






//
//
//
// render() {
//   if (!this.props.parks.length) {
//     if (this.props.location.query.query.length > 0){
//
//       return (
//         <div className="enter-search-message">Search Results not found. Please try again!</div>
//       );
//     } else {
//
//       return <div className="spinner"></div>;
//     }
//   } else {
//     return (
//       <div>
//         <ul className="index-container">
//           {this.props.parks.map(park => <ParkIndexItem key={park.id} park={park}/>)}
//         </ul>
//         <div className="show-map">
//           <IndexParkMap parks={this.props.parks}/>
//         </div>
//       </div>
//     );
//   }
// }
