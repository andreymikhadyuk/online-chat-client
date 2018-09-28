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

const fetchCurrentUser = () => (dispatch, getState) => {
  dispatch(initCurrentUserFetching());
// UserService.fetchCurrentUser();
};

export default fetchCurrentUser;
