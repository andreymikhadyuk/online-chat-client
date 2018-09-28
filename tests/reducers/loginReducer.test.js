import deepFreeze from 'deep-freeze';
import { LOGIN } from '../../src/actions/actionTypes';
import { loginAction } from '../../src/actions/loginAction';
import reducer from '../../src/reducers/loginReducer';

const initialState = {
  isLoading: false,
  token: null,
};

const getAfterLoginInitializingState = () =>
  reducer(deepFreeze(initialState), loginAction(null, { init: true }));

describe('loginReducer.js', () => {
  describe(`action type - ${LOGIN} - initialization`, () => {
    it('should make login initialization', () => {
      const expectedState = {
        ...initialState,
        isLoading: true,
      };
      const newState = getAfterLoginInitializingState();
      expect(newState).toEqual(expectedState);
    });
  });

  describe(`action type - ${LOGIN} - success`, () => {
    const token = 'Bearer some_token';
    let newState;

    beforeEach(() => {
      const afterLoginInitializingState = getAfterLoginInitializingState();
      newState = reducer(deepFreeze(afterLoginInitializingState), loginAction(token));
    });

    it('should update state to the state of successful login', () => {
      const expectedState = {
        isLoading: false,
        token,
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe(`action type - ${LOGIN} - failure`, () => {
    let newState;
    let afterLoginInitializingState;

    beforeEach(() => {
      afterLoginInitializingState = getAfterLoginInitializingState();
      newState = reducer(deepFreeze(afterLoginInitializingState), loginAction(new Error()));
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
