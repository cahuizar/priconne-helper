const mongoose = require('mongoose');

const UserSchemma = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  clan: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    default: null,
    trim: true
  },
  items: {
    type: Array,
    default: []
  },
  characters: {
    type: Array,
    default: []
  },
  settings: {
    type: Array,
    default: []
  },
  resetPasswordToken: {
    type: String,
    default: null
  },
  resetPasswordExpires: {
    type: Date,
    default: null
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchemma);
