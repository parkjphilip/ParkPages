import { RECEIVE_PARK, RECEIVE_PARKS } from '../actions/park_actions';
import merge from 'lodash/merge';

const ParkReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger
  switch(action.type) {
    case RECEIVE_PARKS:
      // let parks = action.parks;
      return action.parks;
    case RECEIVE_PARK:
      let park = action.park;
      return merge({}, state, { park });
    default:
      return state;
  }
};

export default ParkReducer;
