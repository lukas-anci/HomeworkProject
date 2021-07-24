const express = require('express');
const ShopModel = require('../models/Shop');
const router = express.Router();

// create new item
router.post('/api/shop/new', async (req, res) => {
  const itemData = req.body;
  console.log('itemData', itemData);

  const newItem = new ShopModel(itemData);
  try {
    const newItemToBeMade = await newItem.save();
    res.json(newItemToBeMade);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all items

router.get('/api/shop', async (req, res) => {
  try {
    const allItems = await ShopModel.find({});
    res.json(allItems);
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
