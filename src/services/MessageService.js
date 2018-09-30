import ApiService from './ApiService';

/**
 * @param message - { text, createdAt }
 */
const sendMessage = message => ApiService.post('/api/message', message);

export default {
  sendMessage,
};
