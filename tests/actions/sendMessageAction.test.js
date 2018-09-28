import { SEND_MESSAGE_INIT, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL } from '../../src/actions/actionTypes';
import { initMessageSending, onSuccessMessageSend, onFailMessageSend } from '../../src/actions/sendMessageAction';

describe('sendMessageAction.js', () => {
  describe('initMessageSending', () => {
    it('should return correct action', () => {
      const expectedAction = { type: SEND_MESSAGE_INIT };
      const result = initMessageSending();
      expect(result).toEqual(expectedAction);
    });
  });

  describe('onSuccessMessageSend', () => {
    it('should return correct action', () => {
      const message = { text: 'new message' };
      const expectedAction = {
        type: SEND_MESSAGE_SUCCESS,
        payload: message,
      };
      const result = onSuccessMessageSend(message);
      expect(result).toEqual(expectedAction);
    });
  });

  describe('onFailMessageSend', () => {
    it('should return correct action', () => {
      const expectedAction = { type: SEND_MESSAGE_FAIL };
      const result = onFailMessageSend();
      expect(result).toEqual(expectedAction);
    });
  });
});
