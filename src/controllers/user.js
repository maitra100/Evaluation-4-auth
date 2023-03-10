const addUserService = require('../services/user');

const addUser = async (req, res) => {
  try {
    await addUserService.addUserService(req.body);
    res.send('User added successfully');
  } catch (e) {
    res.send(e.message);
  }
};

module.exports = addUser;
