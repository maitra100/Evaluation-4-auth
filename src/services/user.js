const db = require('../../database/models');
const encryptPassword = require('../utils/encrypt');

const addUserService = async (details) => {
  const user = await db.user.create({ userEmail: details.userEmail, password: encryptPassword(details.password) });
  return user;
};

module.exports = { addUserService };
