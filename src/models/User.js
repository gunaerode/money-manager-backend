const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      required: [true, 'Name is required'],
      type: String,
    },
    email: {
      required: [true, 'Email is required'],
      type: String,
    },
    password: {
      required: [true, 'Password is required'],
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
