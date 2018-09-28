import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import messagesReducer from './messagesReducer';

export default combineReducers({
  login: loginReducer,
  messages: messagesReducer,
});
