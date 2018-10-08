import {
  SEND_MESSAGE_INIT,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
  FETCH_MESSAGES_INIT,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAIL,
  ADD_NEW_MESSAGE,
} from '../actions/actionTypes';

const initialState = {
  meta: {
    isLoading: false,
    isSending: false,
  },
  data: [],
};

const initMessageSending = state => ({
  ...state,
  meta: {
    ...state.meta,
    isSending: true,
  },
});

const onSuccessMessageSend = ({ meta, data }, { payload }) => {
  const newMeta = {
    ...meta,
    isSending: false,
  };
  const newData = [
    { ...payload },
    ...data,
  ];
  return {
    meta: newMeta,
    data: newData,
  };
};

const onFailMessageSend = state => ({
  ...state,
  meta: {
    ...state.meta,
    isSending: false,
  },
});

const initMessagesFetching = state => ({
  ...state,
  meta: {
    ...state.meta,
    isLoading: true,
  },
});

const fetchMessagesSuccess = ({ meta, data }, { payload }) => {
  const newMeta = {
    ...meta,
    isLoading: false,
  };
  return {
    meta: newMeta,
    data: [...payload],
  };
};

const fetchMessagesFail = state => ({
  ...state,
  meta: {
    ...state.meta,
    isLoading: false,
  },
});

const addNewMessage = (state, { payload }) => ({
  ...state,
  data: [
    { ...payload },
    ...state.data,
  ],
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_INIT:
      return initMessageSending(state);
    case SEND_MESSAGE_SUCCESS:
      return onSuccessMessageSend(state, action);
    case SEND_MESSAGE_FAIL:
      return onFailMessageSend(state);
    case FETCH_MESSAGES_INIT:
      return initMessagesFetching(state);
    case FETCH_MESSAGES_SUCCESS:
      return fetchMessagesSuccess(state, action);
    case FETCH_MESSAGES_FAIL:
      return fetchMessagesFail(state, action);
    case ADD_NEW_MESSAGE:
      return addNewMessage(state, action);
    default:
      return state;
  }
};

export default reducer;
