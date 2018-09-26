import { SEND_MESSAGE_INIT, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL } from './actionTypes';

const initMessageSending = () => ({ type: SEND_MESSAGE_INIT });

const onSuccessMessageSend = message => ({
  type: SEND_MESSAGE_SUCCESS,
  payload: message,
});

const onFailMessageSend = () => ({ type: SEND_MESSAGE_FAIL });

const sendMessage = message => (dispatch) => {
  dispatch(initMessageSending());
  dispatch(onSuccessMessageSend(message));
};

export default sendMessage;

export {
  // For tests
  initMessageSending,
  onSuccessMessageSend,
  onFailMessageSend,
};
