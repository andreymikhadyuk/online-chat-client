import { createAction } from 'redux-actions';
import get from 'lodash/get';
import { push } from 'react-router-redux';
import { LOGIN } from './actionTypes';
import { ApiService } from '../services';

const loginAction = createAction(
  LOGIN,
  token => ({ token }),
  (token, meta = { init: false }) => ({ init: meta.init })
);

/**
 * @param data - { username, password }
 */
const login = data => async (dispatch) => {
  dispatch(loginAction(null, { init: true }));
  try {
    const response = await ApiService.post('/api/login', data);
    const token = get(response, 'data.token');
    dispatch(loginAction(token));
    localStorage.setItem('token', token);
    dispatch(push('/chat'));
  } catch (error) {
    dispatch(loginAction(error));
  }
};

export default login;

export {
  // For tests
  loginAction,
};
