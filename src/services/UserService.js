import ApiService from './ApiService';

export const fetchCurrentUser = () => ApiService.get('/api/me');
