const redis = require('redis');

const config = {
  socket: {
    host: 'localhost',
    port: 6379,
  },
};
const client = redis.createClient(config);

client.connect().then(() => {
  console.log('Redis connected');
});

const storeToken = async (token) => {
  const status = await client.set(token,'1', 'EX', 60 * 60);
  return status;
};

const getToken = async (inputToken) => {
  const token = await client.get(inputToken);
  return token;
};

module.exports = { storeToken, getToken, client };
