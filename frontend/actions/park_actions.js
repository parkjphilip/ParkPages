import * as ParkAPIUtil from '../util/park_api_util';
import { hashHistory } from 'react-router';
export const RECEIVE_PARK = "RECEIVE_PARK";
export const RECEIVE_PARKS = "RECEIVE_PARKS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

export const fetchPark = id => dispatch => {
  return ParkAPIUtil.fetchPark(id).then(park => dispatch(receivePark(park)));
};

export const fetchParks = (query) => dispatch => {
  return ParkAPIUtil.fetchParks(query)
                    .then(parks => dispatch(receiveParks(parks)))
                    .then(hashHistory.push(`/parks?query=${query}`));
};

export const fetchFeaturedParks = () => dispatch => {
  return ParkAPIUtil.fetchFeaturedParks()
                    .then(parks => dispatch(receiveParks(parks)))
                    .then(hashHistory.push('/'));
};

export const receivePark = park => {
  return ({
    type: RECEIVE_PARK,
    park
  });
};

export const receiveParks = parks => {
  return ({
    type: RECEIVE_PARKS,
    parks
  });
};
