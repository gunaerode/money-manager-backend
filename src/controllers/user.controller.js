const expressAsyncHandler = require('express-async-handler');
const User = require('../models/User');

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

module.exports = { userSignup };
