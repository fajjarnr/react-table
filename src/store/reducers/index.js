import { combineReducers } from 'redux';
import posts from './posts';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  posts,
  form: formReducer,
});
