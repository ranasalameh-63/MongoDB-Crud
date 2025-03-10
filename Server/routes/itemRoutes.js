const express = require('express');
const router = express.Router();
const { createItem, getItems, getItemById, updateItem, deleteItem, softDeleteItem } = require('../controllers/itemController');
const Product = require("../models/itemModel");

router.post('/save', createItem);  // Create
router.get('/', getItems);  // Retrieve all (excluding soft-deleted)
router.get('/:id', getItemById);  // Retrieve one
router.put('/:id', updateItem);  // Update
router.delete('/:id', deleteItem);  // Hard delete
router.patch('/soft-delete/:id', softDeleteItem);  // Soft delete

module.exports = router;
