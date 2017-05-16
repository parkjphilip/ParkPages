import { RECEIVE_PARK, RECEIVE_PARKS, RECEIVE_PHOTO } from '../actions/park_actions';
import merge from 'lodash/merge';

const ParkReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PARKS:
      return action.parks;
    case RECEIVE_PARK:
      let park = action.park;
      return merge({}, {park});
    case RECEIVE_PHOTO:
      let newState = merge({}, state);
      newState.photos.push(action.photo);
      return newState;
    default:
      return state;
  }
};

export default ParkReducer;
//
//
// inside of here, right now it is bringing back a state tat is like
// parks: [{1: paoiwjgoiwagjioa], 2: [wrgoiwjgiowjg], park: [wegwegeg]]
//
// aim for parks state to be like
// parks:{ parks: [], parkdetail: {} }
