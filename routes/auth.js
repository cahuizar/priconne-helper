const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
require('dotenv').config();
const { check, validationResult } = require('express-validator');

const router = express.Router();

// @route     GET api/auth
// @desc      Get logged in user
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password -date -__v -resetPasswordToken -resetPasswordExpires');
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Sorry a server error has occurred, please try again. If the issue persist, please try signing out and closing your browser.');
  }
});

// @route     POST api/auth
// @desc      Auth user & get token
// @access    Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Password must not be empty.')
      .custom(value => !/\s/.test(value))
      .withMessage('Password must not contain any spaces.')
      .isLength({ min: 6, max: 30 })
      .withMessage('Password must be between 6 and 30 characters long.')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    try {
      let user = await User.findOne({ email: req.body.email });
      if (!user) return res.status(400).json({ msg: 'Email and password combination could not be found.' });
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) res.status(400).json({ msg: 'Email and password combination could not be found.' });
      const {
        id,
        email,
        username,
        role,
        items,
        characters,
        clan,
        settings
      } = user;
      const payload = {
        user: {
          id
        }
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: 3600000
        },
        (err, token) => {
          if (err) throw err;
          res.json({
            id,
            email,
            username,
            clan,
            role,
            items,
            characters,
            settings,
            token
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Sorry a server error has occurred, please try again. If the issue persist, please try signing out and closing your browser.');
    }
  }
);

module.exports = router;
