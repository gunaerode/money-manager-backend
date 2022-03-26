const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../middlewares/generateTokens');
const User = require('../models/Users');

const userSignup = expressAsyncHandler(async (req, res) => {
  const { name, email, password, isAdmin } = req?.body;
  const userCheck = await User.findOne({ email });
  if (userCheck) throw new Error('User Exists already');

  try {
    const userDetails = await User.create({ name, email, password, isAdmin });
    res.status(201).json({
      data: userDetails,
      message: 'Signup successful',
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// fetch all the users

const fetchUsers = expressAsyncHandler(async (req, res, next) => {
  try {
    const allUsers = await User.find({});
    if (allUsers.length > 0) {
      res.json(allUsers);
    } else {
      res.status(204).json({
        msg: 'users not found',
      });
    }
  } catch (error) {
    next(error);
  }
});

// login user
const userLogin = expressAsyncHandler(async (req, res, next) => {
  /**
   * NOTE: data hash must be a string if it's not provided as string bcrypt will throw error
   */
  const { email, password } = req?.body;
  try {
    const userDetails = await User.findOne({ email });

    if (userDetails && (await userDetails.isPasswordMatch(password))) {
      res.json({
        _id: userDetails?._id,
        email: userDetails?.email,
        isAdmin: userDetails?.isAdmin,
        token: generateToken(userDetails?._id),
      });
    } else {
      res.status(401).json({
        msg: 'Invalid Credentials',
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = { userSignup, fetchUsers, userLogin };
