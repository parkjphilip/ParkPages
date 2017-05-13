import { RECEIVE_PARK, RECEIVE_PARKS } from '../actions/park_actions';
import merge from 'lodash/merge';

const ParkReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PARKS:
      // let parks = action.parks;
      return action.parks;
    case RECEIVE_PARK:
      let currentPark = action.park;
      return merge({}, state, { currentPark });
    default:
      return state;
  }
};

export default ParkReducer;


//inside of here, right now it is bringing back a state tat is like
// parks: {1: [paoiwjgoiwagjioa], 2: [wrgoiwjgiowjg], park: [wegwegeg]}

//aim for parks state to be like
//parks:{ parks: [], parkdetail: {} }
