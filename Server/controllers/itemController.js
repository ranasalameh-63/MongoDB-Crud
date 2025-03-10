const Item = require('../models/itemModel');

// Create (POST) - Add a new item
const createItem = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read (GET all) - Retrieve all items (excluding soft-deleted ones)
const getItems = async (req, res) => {
    try {
        const items = await Item.find({ isDeleted: false });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Read (GET one) - Retrieve a single item by ID
const getItemById = async (req, res) => {
    try {
        const item = await Item.findOne({ _id: req.params.id, isDeleted: false });
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update (PUT) - Modify an item
const updateItem = async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Hard Delete (DELETE) - Remove item permanently
const deleteItem = async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json({ message: 'Item deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Soft Delete (PATCH) - Mark an item as deleted instead of removing it
const softDeleteItem = async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true });
        if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json({ message: 'Item soft deleted', item: updatedItem });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createItem, getItems, getItemById, updateItem, deleteItem, softDeleteItem };
