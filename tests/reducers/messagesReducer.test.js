import deepFreeze from 'deep-freeze';
import { SEND_MESSAGE_INIT, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL } from 'actions/actionTypes';
import { initMessageSending, sendMessageSuccess, sendMessageFail } from 'actions/sendMessageAction';
import reducer from 'reducers/messagesReducer';

const initialState = {
  meta: {
    isSending: false,
  },
  data: [
    {
      text: 'last message',
      user: 'jack',
    },
    {
      text: 'previous message',
      user: 'agent007',
    }
  ],
};

const getAfterSendInitializingState = () => reducer(deepFreeze(initialState), initMessageSending());

describe('reducer messages.js', () => {
  describe(`action type - ${SEND_MESSAGE_INIT}`, () => {
    let newState;

    beforeEach(() => {
      newState = getAfterSendInitializingState();
    });

    it('should not change data array', () => {
      expect(newState.data).toEqual(initialState.data);
    });

    it('should update meta to sending state', () => {
      const expectedMeta = {
        isSending: true,
      };
      expect(newState.meta).toEqual(expectedMeta);
    });
  });

  describe(`action type - ${SEND_MESSAGE_SUCCESS}`, () => {
    const message = deepFreeze({ text: 'latest message', user: 'Anonymous' });
    let newState;

    beforeEach(() => {
      const afterInitSendingState = getAfterSendInitializingState();
      newState = reducer(deepFreeze(afterInitSendingState), sendMessageSuccess(message));
    });

    it('should update meta to the state of successful sending', () => {
      expect(newState.meta).toEqual(initialState.meta);
    });

    it('should add message to the first place in data array', () => {
      const expectedData = [
        message,
        ...initialState.data,
      ];
      expect(newState.data).toEqual(expectedData);
    });
  });

  describe(`action type - ${SEND_MESSAGE_FAIL}`, () => {
    let newState;

    beforeEach(() => {
      const afterInitSendingState = getAfterSendInitializingState();
      newState = reducer(deepFreeze(afterInitSendingState), sendMessageFail());
    });

    it('should update meta to the failed sending state', () => {
      expect(newState.meta).toEqual(initialState.meta);
    });

    it('should not change data array', () => {
      expect(newState.data).toEqual(initialState.data);
    });
  });
});
