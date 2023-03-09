const jwt = require('jsonwebtoken');

const generateToken = (payload) => jwt.sign(payload, process.env.SECRET_KEY, {
  expiresIn: '1800s',
});

const verifyJWT = async (token) => {
  const decoded = await jwt.verify(token, process.env.SECRET_KEY);
  return decoded;
};

module.exports = { generateToken, verifyJWT };
