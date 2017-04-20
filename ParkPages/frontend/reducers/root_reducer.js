import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ParkReducer from './park_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  parks: ParkReducer
});

export default rootReducer;
