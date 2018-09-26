import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import messagesReducer from './messages';

export default combineReducers({
  login: loginReducer,
  messages: messagesReducer,
});
