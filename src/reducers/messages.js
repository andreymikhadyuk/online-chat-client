import { SEND_MESSAGE_INIT, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL } from '../actions/actionTypes';

const initialState = {
  meta: {
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
    payload,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_INIT:
      return initMessageSending(state);
    case SEND_MESSAGE_SUCCESS:
      return onSuccessMessageSend(state, action);
    case SEND_MESSAGE_FAIL:
      return onFailMessageSend(state);
    default:
      return state;
  }
};

export default reducer;
