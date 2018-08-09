import deepFreeze from 'deep-freeze';
import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAIL } from '../../src/actions/types';
import { initLogin, onSuccessLogin, onFailLogin } from '../../src/actions/login';
import reducer from '../../src/reducers/login';

const initialState = {
  isLoading: false,
  token: '',
};

const getAfterLoginInitializingState = () => reducer(deepFreeze(initialState), initLogin());

describe('reducer login.js', () => {
  describe(`action type - ${LOGIN_INIT}`, () => {
    it('should make login initializing', () => {
      const expectedState = {
        ...initialState,
        isLoading: true,
      };
      const newState = getAfterLoginInitializingState();
      expect(newState).toEqual(expectedState);
    });
  });

  describe(`action type - ${LOGIN_SUCCESS}`, () => {
    const token = 'Bearer some_token';
    let newState;

    beforeEach(() => {
      const afterLoginInitializingState = getAfterLoginInitializingState();
      newState = reducer(deepFreeze(afterLoginInitializingState), onSuccessLogin(token));
    });

    it('should update state to the state of successful login', () => {
      const expectedState = {
        isLoading: false,
        token,
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe(`action type - ${LOGIN_FAIL}`, () => {
    let newState;
    let afterLoginInitializingState;

    beforeEach(() => {
      afterLoginInitializingState = getAfterLoginInitializingState();
      newState = reducer(deepFreeze(afterLoginInitializingState), onFailLogin());
    });

    it('should update state to the state of failed login', () => {
      const expectedState = {
        ...afterLoginInitializingState,
        isLoading: false,
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
