const express = require('express');
const router = express.Router();

const Item = require('../models/Item');

// @ Route    GET /api/items
// @ Desc     Get all items
// @ Access   Public
router.get('/', async (req, res) => {
  try {
    res.send('Whoa Will, it works wow so cool!');
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, data: 'Server Error'});
  }
});

module.exports = router;