import { SEND_MESSAGE_INIT, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL } from 'actions/actionTypes';
import { initMessageSending, sendMessageSuccess, sendMessageFail } from 'actions/sendMessageAction';

describe('sendMessageAction.js', () => {
  describe('initMessageSending', () => {
    it('should return correct action', () => {
      const expectedAction = { type: SEND_MESSAGE_INIT };
      const result = initMessageSending();
      expect(result).toEqual(expectedAction);
    });
  });

  describe('sendMessageSuccess', () => {
    it('should return correct action', () => {
      const message = { text: 'new message' };
      const expectedAction = {
        type: SEND_MESSAGE_SUCCESS,
        payload: message,
      };
      const result = sendMessageSuccess(message);
      expect(result).toEqual(expectedAction);
    });
  });

  describe('sendMessageFail', () => {
    it('should return correct action', () => {
      const expectedAction = { type: SEND_MESSAGE_FAIL };
      const result = sendMessageFail();
      expect(result).toEqual(expectedAction);
    });
  });
});
