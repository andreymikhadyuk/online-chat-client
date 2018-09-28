import ApiService from './ApiService';

const fetchCurrentUser = () => ApiService.get('/api/me');

export default {
  fetchCurrentUser,
};
