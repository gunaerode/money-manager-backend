const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

// hash the password berfore save the data
userSchema.pre('save', async function (next) {
  // run this hashing only if password MODIFIED
  if (!this.isModified()) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next(); // need to pass to next route
});

// Verify password
userSchema.methods.isPasswordMatch = async function (loginPassword) {
  return await bcrypt.compare(loginPassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
