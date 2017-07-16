import { combineReducers } from 'redux';
import tracks from './tracks';
import input from './input';
import filter from './filter';

export default combineReducers({
  tracks,
  input,
  filter,
});
