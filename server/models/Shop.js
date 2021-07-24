const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    description: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
    },
  },
  { timestamps: true }
);

const ShopModel = mongoose.model('shopAndservice', shopSchema);

module.exports = ShopModel;
