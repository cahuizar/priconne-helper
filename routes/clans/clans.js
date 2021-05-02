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

// @route     GET api/clans
// @desc      Get clan
// @access    Private
router.get('/:clan', auth, async (req, res) => {
  const clanId = req.params.clan;
  try {
    const clan = await Clan.findById(clanId).select('-__v -date');
    if (!clan) return res.status(400).json({ msg: 'Clan does not exist' });
    res.json(clan);
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
    const {
      clan,
      role,
      id
    } = req.user;
    if(role !== 'leader') return res.status(400).json({ msg: 'You are not the leader of the clan.' });
    const clanResult = await Clan.findById(clan)
    if (!clanResult) return res.status(400).json({ msg: 'Clan does not exist' });
    if(clanResult.leader !== id) return res.status(400).json({ msg: 'You are not the leader of the clan.' });
    const players = clanResult.players;
    const playersResult = await User.find({id: players})
    // await playersResult.updateOne({clan: null, role: null})
    // await clanResult.deleteOne();
    // res.status(204).send();
    res.json({
      playersResult,
      players
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ msg: 'Clan does not exist' });
  }
});

// @route     POST api/clans
// @desc      Create a clan
// @access    Private
router.post(
  '/',
  [
    auth,
    check('name', 'Please use a valid clan name')
      .not()
      .isEmpty(),
    check('description', 'Please use a valid description')
      .not()
      .isEmpty()
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
          msg: 'User is already part of a clan'
        });
      }
      let clan = await Clan.findOne({
        name
      });
      if (clan) return res.status(400).json({
        msg: 'Clan already exists'
      });
      clan = new Clan({
        name,
        description,
        players: [user.id],
        leader: user.id
      });

      await clan.save();
      await user.updateOne({clan: clan.id, role: "leader"})
      res.json({
        clan, user
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
