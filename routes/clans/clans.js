const express = require('express');
const Clan = require('../../models/Clans');
const User = require('../../models/User');
const auth = require('../../middleware/auth');
require('dotenv').config();
const {
  check,
  param,
  validationResult
} = require('express-validator');

const router = express.Router();

// @route     GET api/clans
// @desc      Get clan
// @access    Private
router.get(
  '/:clanId',
  [
    auth,
      param('clanId')
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
    const clanId = req.params.clanId;
    try {
      const clan = await Clan.findById(clanId).select('-__v -date -battles -pending');
      if (!clan) return res.status(400).json({ msg: 'The clan does not exist.' });
      const leader = await User.findById(clan.leader);
      if (!leader) return res.status(400).json({ msg: 'The leader of the clan does not exist.' });
      const retClan ={ ...clan._doc, players: clan.players.length, leader: leader.username};
      res.json(retClan);
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({ msg: 'Clan does not exist' });
    }
});


// @route     DELETE api/clans
// @desc      Delete clan
// @access    Private
router.delete('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password -date -__v');
    if(!user) {
      return res.status(400).json({
        msg: 'User does not exist'
      });
    }
    const {
      clan,
      role,
      id
    } = user;
    if(role !== 'leader') return res.status(400).json({ msg: 'You are not the leader of a clan.' });
    const clanResult = await Clan.findById(clan)
    if (!clanResult) return res.status(400).json({ msg: 'The clan does not exist.' });
    if(clanResult.leader !== id) return res.status(400).json({ msg: 'You are not the leader of the clan.' });
    const removeClanFromUser = {
      clan: null,
      role: null
    }
    if(!clanResult.players) {
      await user.updateOne(removeClanFromUser);
    } else {
      await User.find({_id: { $in: clanResult.players }}).updateMany(removeClanFromUser);
    }
    await clanResult.deleteOne();
    res.status(200).json({
      msg: `${clanResult.name} has been deleted.`
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ msg: 'Sorry a server error has occurred, please try again. If the issue persist, please try signing out and closing your browser.' });
  }
});

// @route     POST api/clans
// @desc      Create a clan
// @access    Private
router.post(
  '/',
  [
    auth,
    check('name')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Clan name must not be empty')
      .isLength({ min: 3, max: 20 })
      .withMessage('Clan name must be between 3 to 20 characters long'),
    check('description')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Description must not be empty')
      .isLength({ min: 3, max: 100 })
      .withMessage('Description must be between 3 to 100 characters long')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({
        errors: errors.array()
      });
    const {
      name,
      description,
    } = req.body;
    try {
      const user = await User.findById(req.user.id).select('-password -date -__v');
      if(user.clan !== null || user.role !== null ) {
        return res.status(400).json({
          msg: 'You cannot create a clan when you are are part of a clan already.'
        });
      }
      let clan = await Clan.findOne({
        name
      });
      if (clan) return res.status(400).json({
        msg: 'The clan name already exist, please choose a different one.'
      });
      clan = new Clan({
        name,
        description,
        players: [user.id],
        leader: user.id
      });

      await clan.save();
      await user.updateOne({clan: clan.id, role: "leader"})
      res.status(200).json({
        msg: `You have created the clan ${clan.name}`
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Sorry a server error has occurred, please try again. If the issue persist, please try signing out and closing your browser.');
    }
  }
);

module.exports = router;
