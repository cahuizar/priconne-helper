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
    res.status(500).send('Server error');
  }
});

// @route     POST api/auth
// @desc      Auth user & get token
// @access    Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    try {
      let user = await User.findOne({ email: req.body.email });
      if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) res.status(400).json({ msg: 'Invalid Credentials' });
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
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
