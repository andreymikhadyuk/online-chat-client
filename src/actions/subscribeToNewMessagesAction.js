import { ADD_NEW_MESSAGE } from './actionTypes';
import { SocketIOService } from '../services';

const addNewMessage = message => ({
  type: ADD_NEW_MESSAGE,
  payload: message,
});

const subscribeToNewMessages = () => (dispatch) => {
  SocketIOService.subscribeToNewMessages((err, message) => {
    dispatch(addNewMessage(message));
  });
};

export default subscribeToNewMessages;
