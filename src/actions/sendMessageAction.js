import { SEND_MESSAGE_INIT, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL } from './actionTypes';
import { MessageService } from '../services';

const initMessageSending = () => ({ type: SEND_MESSAGE_INIT });

const sendMessageSuccess = message => ({
  type: SEND_MESSAGE_SUCCESS,
  payload: message,
});

const sendMessageFail = error => ({
  type: SEND_MESSAGE_FAIL,
  payload: error,
});

const sendMessage = message => async (dispatch, getState) => {
  dispatch(initMessageSending());
  try {
    await MessageService.sendMessage(message);
    dispatch(sendMessageSuccess({ ...message, user: getState().user.data }));
  } catch (error) {
    dispatch(sendMessageFail(error));
  }
};

export default sendMessage;

export {
  // For tests
  initMessageSending,
  sendMessageSuccess,
  sendMessageFail,
};
