const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false }, // Soft delete flag
    createdAt: { type: Date, default: Date.now }
});

const Item = mongoose.model('Products', itemSchema);
module.exports = Item;
