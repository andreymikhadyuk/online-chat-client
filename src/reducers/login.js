import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types';

const initialState = {
  isLoading: false,
  token: '',
};

const initLogin = state => ({
  ...state,
  isLoading: true,
});

const onSuccessLogin = (state, { payload: { token } }) => ({
  ...state,
  isLoading: false,
  token,
});

const onFailLogin = state => ({
  ...state,
  isLoading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INIT:
      return initLogin(state);
    case LOGIN_SUCCESS:
      return onSuccessLogin(state, action);
    case LOGIN_FAIL:
      return onFailLogin(state);
    default:
      return state;
  }
};

export default reducer;
