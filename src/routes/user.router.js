const express = require('express');
const { userSignup } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.post('/signup', userSignup);

module.exports = userRouter;
