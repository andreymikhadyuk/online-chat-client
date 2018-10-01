import { createUrl } from 'services/ApiService';
import config from 'config';

const backendHost = config.get('backendHost');

describe('ApiService.js', () => {
  describe('createUrl', () => {
    it('should return correct url', () => {
      const endPoint = '/api/messages';
      const result = createUrl(endPoint);
      expect(result).toEqual(`${backendHost}${endPoint}`);
    });
  });
});