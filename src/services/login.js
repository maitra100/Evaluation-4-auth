const bcrypt = require('bcrypt');
const db = require('../../database/models');
const generateToken = require('../utils/jwtToken');
const redisFunctions = require('../utils/redis');

const loginUserService = async (details) => {
  const user = await db.user.findOne({
    where: {
      userEmail: details.userEmail,
    },
  });
  if (user === null) {
    console.log('Invalid Email or password');
    throw new Error('Invalid Email or password');
  }

  const compare = await bcrypt.compareSync(details.password, user.password);
  if (compare) {
    const token = generateToken.generateToken({ userEmail: user.userEmail,userId:user.id });
    await redisFunctions.storeToken(token);
    return token;
  }
  throw new Error('Invalid Email or password');
};

module.exports = { loginUserService };
