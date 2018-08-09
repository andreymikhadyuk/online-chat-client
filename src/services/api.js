import axios from 'axios';
import config from '../config';

const backendHost = config.get('backendHost');

const createUrl = endPoint => `${backendHost}${endPoint}`;

const post = (endPoint, data, headers = {}) => axios.post(createUrl(endPoint), data, { headers });

export {
  post,

  // For tests
  createUrl,
};
