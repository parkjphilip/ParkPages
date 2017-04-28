import React from 'react';
import { Link, withRouter } from 'react-router';
var Rating = require('react-rating');
import FeaturedPark from './featured_park';

class FeaturedParks extends React.Component {

  componentDidMount(){
    //
    this.props.fetchFeaturedParks("");
  }
  componentWillMount(){
    //
    this.props.fetchFeaturedParks("");
  }

  // componentWillReceiveProps(newProps) {
  //   //
  //   if (Object.keys(this.props.parks).length != Object.keys(newProps.parks).length) {
  //     this.props.fetchFeaturedParks("");
  //   }
  // }
	render() {
    //
    if (Object.keys(this.props.parks).length === 0 || Object.keys(this.props.parks).length != 9){
      return <div></div>;
    } else {
		return (
      <div className="featured-parks">
        <div className="featured-title">Check out our Featured Parks!</div>
        <div className="upper-featured">
          <FeaturedPark park={this.props.parks[0]} />
          <FeaturedPark park={this.props.parks[1]} />
          <FeaturedPark park={this.props.parks[2]} />
        </div>
        <div className="lower-featured">
          <FeaturedPark park={this.props.parks[3]} />
          <FeaturedPark park={this.props.parks[4]} />
          <FeaturedPark park={this.props.parks[5]} />
        </div>
      </div>
		);
	 }
 }
}

export default withRouter(FeaturedParks);


//
//
//
// class FeaturedParks extends React.Component {
//
//   // componentDidMount(){
//   //   this.props.fetchFeaturedParks();
//   // }
//   //
//   // componentWillReceiveProps(newProps) {
//   //
//   //   if (Object.keys(this.props.parks).length != Object.keys(newProps.parks).length) {
//   //     this.props.fetchFeaturedParks("");
//   //   }
//   // }
// 	render() {
//     //
//     if (Object.keys(this.props.parks).length === 0){
//       return <div></div>;
//     } else {
// 		return (
//       <div className="featured-parks">
//         <div className="featured-title">Check out our Featured Parks!</div>
//         <div className="upper-featured">
//           <FeaturedPark park={this.props.parks[0]} />
//           <FeaturedPark park={this.props.parks[1]} />
//           <FeaturedPark park={this.props.parks[2]} />
//         </div>
//         <div className="lower-featured">
//           <FeaturedPark park={this.props.parks[3]} />
//           <FeaturedPark park={this.props.parks[4]} />
//           <FeaturedPark park={this.props.parks[5]} />
//         </div>
//       </div>
// 		);
// 	 }
//  }
// }
