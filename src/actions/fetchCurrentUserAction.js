import { push } from 'react-router-redux';
import get from 'lodash/get';
import {
  FETCH_CURRENT_USER_INIT,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_FAIL,
} from './actionTypes';
import { UserService } from '../services';

const initCurrentUserFetching = () => ({ type: FETCH_CURRENT_USER_INIT });

const fetchCurrentUserSuccess = user => ({
  type: FETCH_CURRENT_USER_SUCCESS,
  payload: user,
});

const fetchCurrentUserFail = error => ({
  type: FETCH_CURRENT_USER_FAIL,
  payload: error,
});

const fetchCurrentUser = () => async (dispatch) => {
  dispatch(initCurrentUserFetching());
  try {
    if (!localStorage.getItem('token')) {
      throw new Error();
    }
    const response = await UserService.fetchCurrentUser();
    dispatch(fetchCurrentUserSuccess(get(response, 'data.user')));
  } catch (error) {
    dispatch(fetchCurrentUserFail(error));
    dispatch(push('/login'));
  }
};

export default fetchCurrentUser;
