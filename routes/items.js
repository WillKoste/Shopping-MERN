const express = require('express');
const router = express.Router();

const Item = require('../models/Item');

// @ Route    GET /api/items
// @ Desc     Get all items
// @ Access   Public
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();

    if(!items){
      return res.status(404).json({success: false, data: 'No items are found'});
    }

    if(items.length === 0){
      return res.status(404).json({success: true, count: items.length, data: 'No items recorded, create one to get started!'});
    }

    res.json({success: true, count: items.length, data: items});
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, data: 'Server Error'});
  }
});

// @ Route    GET /api/items/:id
// @ Desc     Get item by id
// @ Access   Public
router.get('/:id', async (req, res) => {
  try {
    res.send(`The id ${req.params.id} looks soo cool`);
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, data: 'Server Error'});
  }
});

router.post('/', async (req, res) => {
  try {
    const item = await Item.create(req.body);

    res.status(201).json({success: true, data: item});
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, data: 'Server Error'});
  }
});

module.exports = router;