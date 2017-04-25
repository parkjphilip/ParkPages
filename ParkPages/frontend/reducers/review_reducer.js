import { RECEIVE_REVIEWS } from '../actions/review_actions';
import merge from 'lodash/merge';

const ReviewReducer = (state = {}, action) => {
  Object.freeze(state);
  //
  switch(action.type) {
    case RECEIVE_REVIEWS:
      // let parks = action.parks;
      return action.reviews;
    // case RECEIVE_REVIEW:
    //   let park = action.park;
    //   return merge({}, state, { park });
    default:
      return state;
  }
};

export default ReviewReducer;
