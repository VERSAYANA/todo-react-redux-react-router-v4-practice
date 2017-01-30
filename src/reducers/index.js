import { combineReducers } from 'redux';
import todos from './todos';
import tags from './tags';
import filter from './filter';

const index = combineReducers({
  todos,
  tags,
  filter
});

export default index;
