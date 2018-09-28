import axios from 'axios';
import config from '../config';

const backendHost = config.get('backendHost');

const createUrl = endPoint => `${backendHost}${endPoint}`;

const getAuthorizationHeaderObject = () => {
  const token = localStorage.getItem('token');

  return token ? { Authorization: token } : {};
};

function addAuthorizationHeader(headers) {
  if (typeof headers === 'object') {
    return {
      ...headers,
      ...getAuthorizationHeaderObject(),
    };
  }

  return getAuthorizationHeaderObject();
}

const get = (endPoint, params, headers = {}) => {
  const url = createUrl(endPoint);
  const newHeaders = addAuthorizationHeader(headers);
  return axios.get(url, { params, headers: newHeaders });
};

const post = (endPoint, data, headers = {}) => {
  const url = createUrl(endPoint);
  const newHeaders = addAuthorizationHeader(headers);
  return axios.post(url, data, { headers: newHeaders });
};

export default {
  get,
  post,
};

// For tests
export {
  createUrl,
};
