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
    const item = await Item.findById(req.params.id);

    if(!item){
      return res.status(404).json({success: false, data: `No item with the id of ${req.params.id} found, please try again.`});
    }

    res.json({success: true, data: item});
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, data: 'Server Error'});
  }
});

// @ Route    POST /api/items
// @ Desc     Create item
// @ Access   Public
router.post('/', async (req, res) => {
  try {
    const item = await Item.create(req.body);

    res.status(201).json({success: true, data: item});
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, data: 'Server Error'});
  }
});

// @ Route    PUT /api/items/:id
// @ Desc     Update item by id
// @ Access   Public
router.put('/:id', async (req, res) => {
  try {
    let item = await Item.findById(req.params.id);
    
    if(!item){
      return res.status(404).json({success: false, data: `No item with the id of ${req.params.id} found, please try again.`});
    }

    item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.json({success: true, data: item});
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, data: 'Server Error'});
  }
});

// @ Route    DELETE /api/items/:id
// @ Desc     Delete item by id
// @ Access   Public
router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if(!item){
      return res.status(404).json({success: false, data: `No item with the id of ${req.params.id} found, please try again.`});
    }

    item.remove();

    res.json({success: true, data: `Item ${req.params.id} deleted successfully`});
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, data: 'Server Error'});
  }
});

module.exports = router;