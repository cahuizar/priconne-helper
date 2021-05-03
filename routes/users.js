const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {
  check,
  validationResult
} = require('express-validator');

const router = express.Router();

// @route     POST api/users
// @desc      Register a user
// @access    Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('username')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Username must not be empty')
      .custom(value => !/\s/.test(value))
      .withMessage('No spaces are allowed in the username')
      .isLength({ max: 15 })
      .withMessage('Username must be at most 15 characters long'),
    check('password', 'Please enter a password with 6 or more characters')
      .trim()
      .custom(value => !/\s/.test(value))
      .withMessage('No spaces are allowed in the password')
      .isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({
        errors: errors.array()
      });

    const {
      email,
      username,
      password
    } = req.body;

    try {
      let userEmail = await User.findOne({
        email
      });
      if (userEmail) return res.status(400).json({
        msg: 'Email is already in use, please use a different one.'
      });
      let userUsername = await User.findOne({
        username
      });
      if (userUsername) return res.status(400).json({
        msg: 'Username is already in use, please use a different one.'
      });
      let user = new User({
        email,
        username,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      await user.save();
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET, {
          expiresIn: 3600000
        },
        (err, token) => {
          if (err) throw err;
          res.json({
            token
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
