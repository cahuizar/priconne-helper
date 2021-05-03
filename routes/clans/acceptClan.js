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

// @route     POST api/clans/accept
// @desc      Request to join a clan
// @access    Private
router.post(
  '/',
  [
    auth,
    check('userId')
      .trim()
      .not()
      .isEmpty()
      .withMessage('The user id must not be empty')
      .isLength({ min: 24, max: 24 })
      .withMessage('The user id is invalid')
    ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({
        errors: errors.array()
      });
    const { userId } = req.body;
    try {
      const user = await User.findById(req.user.id).select('-password -date -__v');
      if (!user) return res.status(400).json({ msg: 'User does not exist' });
      if(user.clan === null || (user.role !== "leader" && user.role !== "admin") ) {
        return res.status(400).json({
          msg: 'User is not a leader or admin of the clan.'
        });
      }
      const userToAccept = await User.findById(userId).select('-password -date -__v');
      if (!userToAccept) return res.status(400).json({ msg: 'User to accept does not exist' });
      let clan = await Clan.findById(user.clan)
      if (!clan) return res.status(400).json({
        msg: 'The clan does not exist.'
      });
      if(userToAccept.clan !== null) {
        await clan.updateOne({ $pull: { pending: userId }})
        return res.status(400).json({
          msg: `Unable to accept ${userToAccept.username} since they are already part of a clan.`
        });
      }
      if(!clan.pending.includes(userToAccept.id)) return res.status(400).json({
        msg: `Unable to accept ${userToAccept.username} to join since they currently don't have a pending request to join`
      });
      if (clan.players.length >= 30) return res.status(400).json({
        msg: `Unable to accept ${userToAccept.username} to join since the clan has 30 members already.`
      });
      await clan.updateOne({ $push: { players: userToAccept.id }, $pull: { pending: userToAccept.id }});
      await userToAccept.updateOne({clan: clan.id, role: "player"});
      res.status(200).json({
        msg: `${userToAccept.username} has joined the clan.`
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Sorry a server error has occurred, please try again. If the issue persist, please try signing out and closing your browser.');
    }
  }
);

module.exports = router;
