const User = require('../models/User');

const userSignup = async (req, res) => {
  const { name, email, password, isAdmin } = req?.body;
  try {
    const userCheck = await User.findOne({ email });
    if (userCheck) {
      res.status(200).json({
        data: userCheck,
        message: 'User Exists already',
      });
    } else {
      const userDetails = await User.create({ name, email, password, isAdmin });
      res.status(201).json({
        data: userDetails,
        message: 'Signup successful',
      });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { userSignup };
