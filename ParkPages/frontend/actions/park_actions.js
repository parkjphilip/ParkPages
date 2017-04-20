import * as ParkAPIUtil from '../util/park_api_util'

export const RECEIVE_PARK = "RECEIVE_PARK";
export const RECEIVE_PARKS = "RECEIVE_PARKS";
// export const RESET_ERRORS = "RESET_ERRORS";

export const fetchPark = park => dispatch => {
  return ParkAPIUtil.fetchPark(park).then(park => dispatch(receivePark(park)));
}

export const fetchParks = () => dispatch => {
  return ParkAPIUtil.fetchPark(park).then(park => dispatch(receivePark(park)));
}

export const receivePark = park => {
  return {
    type: RECEIVE_PARK,
    park
  }
}

export const receiveParks = parks => {
  return {
    type: RECEIVE_PARKS,
    parks
  }
}
