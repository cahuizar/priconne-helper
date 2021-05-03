const express = require('express');
const Clan = require('../../models/Clans');
const User = require('../../models/User');
const auth = require('../../middleware/auth');
require('dotenv').config();

const {
  check,
  validationResult
} = require('express-validator');

const router = express.Router();

// @route     POST api/clans/join
// @desc      Request to join a clan
// @access    Private
router.post(
  '/',
  [
    auth,
    check('clanId')
      .trim()
      .not()
      .isEmpty()
      .withMessage('The clan id must not be empty.')
      .isLength({ min: 24, max: 24 })
      .withMessage('The clan id is invalid')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({
        errors: errors.array()
      });
    const { clanId } = req.body;
    try {
      const user = await User.findById(req.user.id).select('-password -date -__v');
      if(user.clan !== null || user.role !== null ) {
        return res.status(400).json({
          msg: 'User is already part of a clan'
        });
      }
      let clan = await Clan.findById(clanId)
      if (!clan) return res.status(400).json({
        msg: 'Clan not found'
      });
      if(clan.pending.includes(user.id)) return res.status(400).json({
        msg: 'You have already requested to join the clan.'
      });
      if (clan.players.length >= 30) return res.status(400).json({
        msg: 'Unable to request to join since the clan has 30 members already.'
      });
      await clan.updateOne({ $push: { pending: user.id }})
      res.json({
        clan,
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
