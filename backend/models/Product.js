const mongoose = require('mongoose');

const prodectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: false
    },
    imageUrl: {
        type: String,
        required: true
    },
    audioUrl: {
        type: String,
        required: true
    },
});

const Product = mongoose.model('product', prodectSchema);

module.exports = Product;