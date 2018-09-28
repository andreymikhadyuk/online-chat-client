import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import messagesReducer from './messagesReducer';
import userReducer from './userReducer';

export default combineReducers({
  login: loginReducer,
  messages: messagesReducer,
  user: userReducer,
});
