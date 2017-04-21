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
        <div className="show-park-container">
          <div className="show-name"> {this.props.currentPark.name} </div>
          <div className="show-street"> {this.props.currentPark.street} </div>
          <div className="city"> {this.props.currentPark.city} </div>
          <div className="state"> {this.props.currentPark.state} </div>
          <div className="zip_code"> {this.props.currentPark.zip_code} </div>
          <div className="phone_number"> {this.props.currentPark.phone_number} </div>
          <div className="web_site"> {this.props.currentPark.web_site} </div>
        </div>
      );
    }
	}

}

export default withRouter(ParkDetail);
