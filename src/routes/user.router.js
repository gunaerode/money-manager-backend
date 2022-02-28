const express = require('express');
const { userSignup, fetchUsers } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.post('/signup', userSignup);
userRouter.get('/', fetchUsers);

module.exports = userRouter;
