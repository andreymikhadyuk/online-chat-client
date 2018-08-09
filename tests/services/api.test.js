import { createUrl } from '../../src/services/api';
import config from '../../src/config';

const backendHost = config.get('backendHost');

describe('api.js', () => {
  describe('createUrl', () => {
    it('should return correct url', () => {
      const endPoint = '/api/messages';
      const result = createUrl(endPoint);
      expect(result).toEqual(`${backendHost}${endPoint}`);
    });
  });
});