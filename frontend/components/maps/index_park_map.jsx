import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class IndexParkMap extends React.Component {

  componentWillReceiveProps(newProps) {

    if (this.props.parks != newProps.parks ) {

      var myCenter = { lat: newProps.parks[0].lat, lng: newProps.parks[0].lng };

      const mapOptions = {
        center: myCenter,
        zoom: 11
      };
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      newProps.parks.forEach(park => {
        var contentString =
          `<div id="content">${park.name}</div>
          <div> ${park.city}, ${park.state}</div>
          <div> ${park.lat}, ${park.lng}</div>`;

        var infowindow = new google.maps.InfoWindow({
            content: contentString
          });

        var marker = new google.maps.Marker({
          position: { lat: park.lat, lng: park.lng },
          map: this.map
        });
        marker.addListener('click', function() {
          infowindow.open(this.map, marker);
        });
      });
    }
  }

  componentDidMount() {
    var myCenter = { lat: this.props.parks[0].lat, lng: this.props.parks[0].lng };

    const mapOptions = {
      center: myCenter,
      zoom: 11
    };
    this.map = new google.maps.Map(this.mapNode,mapOptions);
    this.props.parks.forEach(park => {
      var marker = new google.maps.Marker({
        position: { lat: park.lat, lng: park.lng },
        map: this.map
      });
    });
  }

  render() {
    return (
      <div ref={ map => this.mapNode = map }></div>
    );
  }

}

export default withRouter(IndexParkMap);
