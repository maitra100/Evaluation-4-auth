const tokenVerifyService = require('../services/verify');

const tokenVerify = async (req, res) => {
  try {
    await tokenVerifyService.tokenVerifyService(req.body.token);
    res.status(200).send('token verified');
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = tokenVerify;
