const express = require('express');
const addUser = require('../controllers/user');
const loginUser = require('../controllers/login');
const tokenVerify = require('../controllers/verify');
const {validateUser,tokenValidate}=require('../middlewares/validator');

const route = express.Router();

route.post('/user',validateUser, addUser);
route.post('/login',validateUser, loginUser);
route.post('/token/variable', tokenValidate,tokenVerify);

module.exports = route;
