import { combineReducers } from 'redux';
import loginReducer from './login';
import messagesReducer from './messages';

export default combineReducers({
  login: loginReducer,
  messages: messagesReducer,
});
