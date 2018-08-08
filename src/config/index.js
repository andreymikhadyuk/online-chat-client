const environments = {
  production: 'production',
};

const DEFAULT_FILE_NAME = 'default';

module.exports = {
  get(property) {
    const nodeEnv = process.env.NODE_ENV;
    const fileName = (nodeEnv && environments[nodeEnv.toLowerCase()]) || DEFAULT_FILE_NAME;
    const defaultObject = require(`./${DEFAULT_FILE_NAME}`);
    if (fileName !== DEFAULT_FILE_NAME) {
      const envObject = require(`./${fileName}`);
      Object.assign(defaultObject, envObject);
    }
    if (!defaultObject[property]) {
      throw new Error(`Configuration property "${property}" is not defined`);
    }
    return defaultObject[property];
  }
};