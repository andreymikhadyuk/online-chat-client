import { LOGIN } from '../../src/actions/actionTypes';
import { createLoginAction } from '../../src/actions/loginActions';

describe('loginActions.js', () => {
  describe('createLoginAction', () => {
    it('should create action for login initialize', () => {
      const expectedAction = {
        type: LOGIN,
        payload: { token: null },
        meta: { init: true },
      };
      const result = createLoginAction(null, { init: true });
      expect(result).toEqual(expectedAction);
    });

    it('should create action for successful login', () => {
      const token = 'Bearer token';
      const expectedAction = {
        type: LOGIN,
        payload: { token },
        meta: { init: false },
      };
      const result = createLoginAction(token);
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
      const result = createLoginAction(error);
      expect(result).toEqual(expectedAction);
    });
  });
});
