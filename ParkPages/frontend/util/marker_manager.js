export default class MarkerManager {

  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(parks){
    //adds parks to the parks hash
    const parksObj = {};
    parks.forEach(park => parksObj[park.id] = park);

    //creates new markers for each park that isnt already in the markers hash
    parks
      .filter(park => !this.markers[park.id])
      .forEach(newPark => this.createMarkerFromPark(newPark, this.handleClick));

    Object.keys(this.markers)
      .filter(parkId => !parksObj[parkId])
      .forEach((parkId) => this.removeMarker(this.markers[parkId]));
  }

  createMarkerFromBench(park) {
    const position = new google.maps.LatLng(park.lat, park.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      parkId: park.id
    });

    marker.addListener('click', () => this.handleClick(park));
    this.markers[marker.parkId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.parkId].setMap(null);
    delete this.markers[marker.parkId];
  }
}
