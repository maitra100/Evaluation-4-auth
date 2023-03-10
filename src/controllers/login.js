const loginUserService = require('../services/login');

const loginUser = async (req, res) => {
  try {
    const details = await loginUserService.loginUserService(req.body);
    res.send({ token: details });
  } catch (e) {
    res.send(e.message);
  }
};

module.exports = loginUser;
