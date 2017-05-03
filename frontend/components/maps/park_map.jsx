import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class ParkMap extends React.Component {

  componentDidMount() {
    var contentString =
      `<div id="content">${this.props.currentPark.name}</div>
      <div> ${this.props.currentPark.city}, ${this.props.currentPark.state}</div>
      <div> ${this.props.currentPark.lat}, ${this.props.currentPark.lng}</div>`;

    var myCenter = { lat: this.props.currentPark.lat, lng: this.props.currentPark.lng };
    const mapOptions = {
      center: myCenter,
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    var marker = new google.maps.Marker({
      position: myCenter,
      map: this.map,
    });
    marker.addListener('click', function() {
      infowindow.open(this.map, marker);
    });
  }

  render() {
    return (
      <div ref={ map => this.mapNode = map }></div>
    );
  }

}

export default withRouter(ParkMap);
