const mongoose = require('mongoose');

const ClansSchemma = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  battles: {
    type: Array,
    default: []
  },
  pending: {
    type: Array,
    default: []
  },
  players: {
    type: Array,
    default: []
  },
  leader: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('clan', ClansSchemma);
