const express = require('express');
const {
  userSignup,
  fetchUsers,
  loginUser,
} = require('../controllers/users.controller');

const userRouter = express.Router();

userRouter.get('/', fetchUsers);
userRouter.post('/signup', userSignup);
userRouter.post('/login', loginUser);

module.exports = userRouter;
