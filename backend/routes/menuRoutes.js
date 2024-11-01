// backend/routes/menuRoutes.js
const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Create a menu item
router.post('/', async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;
    const menuItem = new MenuItem({ name, description, price, imageUrl });
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(500).json({ error: 'Error creating menu item' });
  }
});

// Read all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching menu items' });
  }
});

// Update a menu item by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedItem = await MenuItem.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Error updating menu item' });
  }
});

// Delete a menu item by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await MenuItem.findByIdAndDelete(id);
    res.status(200).json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting menu item' });
  }
});

module.exports = router;
