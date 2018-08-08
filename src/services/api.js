import request from 'request';

const createUrl = endPoint => `${endPoint}`;

const post = (endPoint, params = {}) => {
  const { data } = params;
  const options = {
    url: createUrl(endPoint),
    form: data,
  };
  return new Promise((resolve, reject) => {
    request.post(options, (err, response, body) => {
      if (err) return reject(err);
    });
  });
};

export { post };
