import { combineReducers } from 'redux';

import giphy from './giphy';
import likes from './likes';

export default combineReducers({
  giphy,
  likes
});
