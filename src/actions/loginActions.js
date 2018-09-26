import { createAction } from 'redux-actions';
import { LOGIN } from './actionTypes';
// import { post } from '../services/api';

const createLoginAction = createAction(
  LOGIN,
  token => ({ token }),
  (token, meta = { init: false }) => ({ init: meta.init })
);

const login = data => async (dispatch) => {
  dispatch(createLoginAction(null, { init: true }));
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
  createLoginAction,
};
