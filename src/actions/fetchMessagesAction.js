import get from 'lodash/get';
import { FETCH_MESSAGES_INIT, FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_FAIL } from './actionTypes';
import MessageService from '../services/MessageService';

const initMessageFetching = () => ({ type: FETCH_MESSAGES_INIT });

const fetchMessagesSuccess = messages => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload: messages,
});

const fetchMessagesFail = error => ({
  type: FETCH_MESSAGES_FAIL,
  payload: error,
});

const fetchMessages = () => (dispatch) => {
  dispatch(initMessageFetching());
  MessageService.getMessages()
    .then((response) => {
      dispatch(fetchMessagesSuccess(get(response, 'data.messages')));
    })
    .catch((error) => {
      dispatch(fetchMessagesFail(error));
    });
};

export default fetchMessages;

export {
  // For tests
  initMessageFetching,
  fetchMessagesSuccess,
  fetchMessagesFail,
};
