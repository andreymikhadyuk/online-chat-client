import { createAction } from 'redux-actions';
import get from 'lodash/get';
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
const login = data => (dispatch) => {
  dispatch(loginAction(null, { init: true }));
  ApiService.post('/api/login', data)
    .then((response) => {
      const token = get(response, 'data.token');
      dispatch(loginAction(token));
      localStorage.setItem('token', token);
    })
    .catch((error) => {
      dispatch(loginAction(error));
    });
};

export default login;

export {
  // For tests
  loginAction,
};
