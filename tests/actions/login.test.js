import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAIL } from '../../src/actions/types';
import { initLogin, onSuccessLogin, onFailLogin } from '../../src/actions/login';

describe('action creators login.js', () => {
  describe('initLogin', () => {
    it('should return correct action', () => {
      const expectedAction = { type: LOGIN_INIT };
      const result = initLogin();
      expect(result).toEqual(expectedAction);
    });
  });

  describe('onSuccessLogin', () => {
    it('should return correct action', () => {
      const token = 'Bearer some_token';
      const expectedAction = {
        type: LOGIN_SUCCESS,
        payload: { token },
      };
      const result = onSuccessLogin(token);
      expect(result).toEqual(expectedAction);
    });
  });

  describe('onFailLogin', () => {
    it('should return correct action', () => {
      const expectedAction = { type: LOGIN_FAIL };
      const result = onFailLogin();
      expect(result).toEqual(expectedAction);
    });
  });
});
