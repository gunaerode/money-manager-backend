const express = require('express');
const {
  userSignup,
  fetchUsers,
  userLogin,
} = require('../controllers/users.controller');

const userRouter = express.Router();

userRouter.get('/', fetchUsers);
userRouter.post('/signup', userSignup);
userRouter.post('/login', userLogin);

module.exports = userRouter;
