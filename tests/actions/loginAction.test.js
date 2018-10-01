import { LOGIN } from 'actions/actionTypes';
import { loginAction } from 'actions/loginAction';

describe('loginAction.js', () => {
  describe('loginAction', () => {
    it('should create action for login initialize', () => {
      const expectedAction = {
        type: LOGIN,
        payload: { token: null },
        meta: { init: true },
      };
      const result = loginAction(null, { init: true });
      expect(result).toEqual(expectedAction);
    });

    it('should create action for successful login', () => {
      const token = 'Bearer token';
      const expectedAction = {
        type: LOGIN,
        payload: { token },
        meta: { init: false },
      };
      const result = loginAction(token);
      expect(result).toEqual(expectedAction);
    });

    it('should create action for failed login', () => {
      const error = new Error();
      const expectedAction = {
        type: LOGIN,
        payload: error,
        error: true,
        meta: { init: false },
      };
      const result = loginAction(error);
      expect(result).toEqual(expectedAction);
    });
  });
});
