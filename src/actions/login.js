import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAIL } from './types';
// import { post } from '../services/api';

const initLogin = () => ({ type: LOGIN_INIT });

const onSuccessLogin = token => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

const onFailLogin = () => ({ type: LOGIN_FAIL });

const login = data => async (dispatch) => {
  dispatch(initLogin());
  // try {
  //   const respone = await post('/api/login', { data });
  //   dispatch(onSuccessLogin('Bearer token'));
  // } catch (err) {
  //   dispatch(onFailLogin());
  // }
};

export default login;

export {
  // For tests
  initLogin,
  onSuccessLogin,
  onFailLogin,
};
