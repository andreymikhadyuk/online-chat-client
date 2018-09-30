import { SEND_MESSAGE_INIT, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL } from './actionTypes';
import MessageService from '../services/MessageService';

const initMessageSending = () => ({ type: SEND_MESSAGE_INIT });

const sendMessageSuccess = message => ({
  type: SEND_MESSAGE_SUCCESS,
  payload: message,
});

const sendMessageFail = error => ({
  type: SEND_MESSAGE_FAIL,
  payload: error,
});

const sendMessage = message => (dispatch, getState) => {
  dispatch(initMessageSending());
  MessageService.sendMessage(message)
    .then(() => {
      dispatch(sendMessageSuccess({ ...message, user: getState().user.data }));
    })
    .catch((error) => {
      dispatch(sendMessageFail(error));
    });
};

export default sendMessage;

export {
  // For tests
  initMessageSending,
  sendMessageSuccess,
  sendMessageFail,
};
