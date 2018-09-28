import {
  FETCH_CURRENT_USER_INIT,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_FAIL,
} from './actionTypes';
import UserService from '../services/UserService';

const initCurrentUserFetching = () => ({ type: FETCH_CURRENT_USER_INIT });

const fetchCurrentUserSuccess = user => ({
  type: FETCH_CURRENT_USER_SUCCESS,
  payload: user,
});

const fetchCurrentUserFail = () => ({ type: FETCH_CURRENT_USER_FAIL });

const fetchCurrentUser = () => (dispatch, getState) => {
  dispatch(initCurrentUserFetching());
  UserService.fetchCurrentUser();
};
