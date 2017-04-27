import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class ParkMap extends React.Component {

  componentDidMount() {
    var myCenter = { lat: this.props.currentPark.lat, lng: this.props.currentPark.lng };
    const mapOptions = {
      center: myCenter,
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    var marker = new google.maps.Marker({
      position: myCenter,
      map: this.map
    });
  }

  render() {
    return (
      <div ref={ map => this.mapNode = map }></div>
    );
  }

}

export default withRouter(ParkMap);
