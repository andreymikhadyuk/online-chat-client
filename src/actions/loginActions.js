import { createAction } from 'redux-actions';
import { get } from 'lodash';
import { LOGIN } from './actionTypes';
import { post } from '../services/ApiService';

const createLoginAction = createAction(
  LOGIN,
  token => ({ token }),
  (token, meta = { init: false }) => ({ init: meta.init })
);

/**
 * @param data - { username, password }
 */
const login = data => (dispatch) => {
  dispatch(createLoginAction(null, { init: true }));
  post('/api/login', data)
    .then((response) => {
      const token = get(response, 'data.token');
      dispatch(createLoginAction(token));
      localStorage.setItem('token', token);
    })
    .catch((error) => {
      dispatch(createLoginAction(error));
    });
};

export default login;

export {
  // For tests
  createLoginAction,
};
