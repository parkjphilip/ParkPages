import React from 'react';
import { Link, withRouter } from 'react-router';

class ParkDetail extends React.Component {
	constructor(props) {
		super(props);
    this.state = this.props.currentPark;
	}

  componentWillMount(){
    this.props.fetchPark(this.props.parkId);
  }

  // componentWillMount() {
  //   this.props.fetchPark(this.props.parkId);
  // }

  // componentWillReceiveProps(newProps) {
  // if (this.props.params.id !== newProps.params.id) {
  //   this.props.fetchPark(newProps.params.id);
  //   }
  // }

  render() {
    if (!this.props.currentPark) {
      return <div>loading...</div>;
    } else {
      return (
        <div className="show-park-area">
          <div className="show-park-container-upper">
            <div className="show-park-info">
              <div className="detail-name">{this.props.currentPark.name} </div>
              <div className="detail-address1"> {this.props.currentPark.street}</div>
              <div className="detail-address2"> {this.props.currentPark.city} {this.props.currentPark.state} {this.props.currentPark.zip_code}</div>
              <div className="detail-phone"> {this.props.currentPark.phone_number}</div>
              <div className="detail-website"> {this.props.currentPark.website}</div>
            </div>
            <div className="show-park-image">
            </div>
          </div>
          <div className="show-park-container-lower">
            <div className="review-container">
            </div>
            <div className="show-lower-right">
              <div className="show-map">
              </div>
              <div className="review-form">
              </div>
            </div>
          </div>
        </div>

      );
    }
	}

}

export default withRouter(ParkDetail);

// <img className="image" src=`{this.props.currentPark.photo_url}`></img>
//
// <div className="show-park-container">
//   <div className="show-name"> {this.props.currentPark.name} </div>
//   <div className="address1"> {this.props.currentPark.street} </div>
//   <div className="address2"> {this.props.currentPark.city}
//     {this.props.currentPark.state} {this.props.currentPark.zip_code}
//   </div>
//   <div className="phone_number"> {this.props.currentPark.phone_number} </div>
//   <div className="web_site"> {this.props.currentPark.web_site} </div>
// </div>
