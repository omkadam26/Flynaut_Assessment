const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, index: true },
  password: String,
  email: String,
  // Other fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;
