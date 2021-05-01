const mongoose = require('mongoose');

const UserSchemma = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  clan: {
    type: String,
    default: null
  },
  role: {
    type: String,
    default: null
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
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchemma);
