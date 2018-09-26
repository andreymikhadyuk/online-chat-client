import { LOGIN } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  token: null,
};

const initLogin = state => ({
  ...state,
  isLoading: true,
  token: null,
});

const loginSuccess = (state, { payload: { token } }) => ({
  ...state,
  isLoading: false,
  token,
});

const loginFailure = state => ({
  ...state,
  isLoading: false,
});

const reducer = (state = initialState, action) => {
  if (action.type !== LOGIN) {
    return state;
  }
  if (action.error) {
    return loginFailure(state);
  }
  if (action.meta.init) {
    return initLogin(state);
  }
  return loginSuccess(state, action);
};

export default reducer;
