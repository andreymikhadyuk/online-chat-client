import openSocket from 'socket.io-client';
import config from 'config';

const socket = openSocket(config.get('backendHost'));

const subscribeToNewMessages = (cb) => {
  socket.on('newMessage', message => cb(null, message));
};

export default {
  subscribeToNewMessages,
};
