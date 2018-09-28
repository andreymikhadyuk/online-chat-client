import {
  FETCH_CURRENT_USER_INIT,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_FAIL
} from '../actions/actionTypes';

const initialState = {
  meta: {
    success: false,
  },
  data: {},
};

const initCurrentUserFetching = state => ({
  ...state,
  meta: {
    success: false,
  },
});

const fetchCurrentUserSuccess = (state, { payload }) => ({
  meta: {
    success: true,
  },
  data: {
    ...payload,
  },
});

const fetchCurrentUserFail = () => ({
  meta: {
    success: false,
  },
  data: {},
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER_INIT:
      return initCurrentUserFetching(state);
    case FETCH_CURRENT_USER_SUCCESS:
      return fetchCurrentUserSuccess(state, action);
    case FETCH_CURRENT_USER_FAIL:
      return fetchCurrentUserFail();
    default:
      return state;
  }
};

export default reducer;
