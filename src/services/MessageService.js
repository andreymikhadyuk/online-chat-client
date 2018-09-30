import ApiService from './ApiService';

const getMessages = () => ApiService.get('/api/messages');

/**
 * @param message - { text, createdAt }
 */
const sendMessage = message => ApiService.post('/api/messages', message);

export default {
  getMessages,
  sendMessage,
};
