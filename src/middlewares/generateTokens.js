const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (_id, email) =>
  jwt.sign({ _id, email }, process.env.JWT_KEY, { expiresIn: '30d' });

module.exports = generateToken;
