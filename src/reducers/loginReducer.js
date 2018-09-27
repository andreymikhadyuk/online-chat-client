import { LOGIN } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  token: null,
};

const initLogin = () => ({
  ...initialState,
  isLoading: true,
});

const loginSuccess = (state, { payload: { token } }) => ({
  isLoading: false,
  token,
});

const loginFailure = () => ({
  ...initialState,
});

const reducer = (state = initialState, action) => {
  if (action.type !== LOGIN) {
    return state;
  }
  if (action.error) {
    return loginFailure();
  }
  if (action.meta.init) {
    return initLogin();
  }
  return loginSuccess(state, action);
};

export default reducer;
