import { combineReducers } from 'redux';
import secretReducer from './reducers/secretReducer';

const rootReducer = combineReducers({
  secrets: secretReducer
})

export default rootReducer;