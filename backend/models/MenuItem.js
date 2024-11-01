// backend/models/MenuItem.js
const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  imageUrl: { type: String }, // URL for the menu item's image
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
