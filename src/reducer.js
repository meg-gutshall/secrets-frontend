import { combineReducers } from 'redux';
import secretReducer from './reducers/secretReducer';
import tagReducer from './reducers/tagReducer';

const rootReducer = combineReducers({
  secrets: secretReducer,
  tags: tagReducer
})

export default rootReducer;