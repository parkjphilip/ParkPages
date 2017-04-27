import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';


class ParkMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      <div ref={ map => this.mapNode = map }></div>
    );
  }

}

export default withRouter(ParkMap);
