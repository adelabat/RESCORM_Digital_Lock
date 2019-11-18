import {combineReducers} from 'redux';
import trackingReducer from './trackingReducer';
import scormReducer from './scormReducer';
import userProfileReducer from './userProfileReducer';
import timer from './timer';

import waitForUserProfileReducer from './waitForUserProfileReducer';

const GlobalState = combineReducers({
  tracking:trackingReducer,
  scorm:scormReducer,
  timer:timer,
  user_profile:userProfileReducer,
  wait_for_user_profile:waitForUserProfileReducer,
});

export default GlobalState;