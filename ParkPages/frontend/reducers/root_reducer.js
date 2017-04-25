import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ParkReducer from './park_reducer';
import ReviewReducer from './review_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  parks: ParkReducer,
  reviews: ReviewReducer
});

export default rootReducer;
