const joi=require('joi');

const userSchema = joi.object({
  userEmail: joi.string().email().required(),
  password: joi.string().min(8).required(),
});

const tokenSchema = joi.object({
  token: joi.string().max(1000).required(),
});

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};

const tokenValidate = (req, res, next) => {
  const { error } = tokenSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};

module.exports={validateUser,tokenValidate};