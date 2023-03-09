const verifyJWT = require('../utils/jwtToken');
const redisFunctions = require('../utils/redis');

const tokenVerifyService = async (token) => {
  const response = await redisFunctions.getToken(token);
  console.log(token.length);
  if (response!=='1') throw new Error('Invalid token');
  const decoded = verifyJWT.verifyJWT(token);
  if (decoded) return decoded;
  throw new Error('Invalid token');
};

module.exports = { tokenVerifyService };
