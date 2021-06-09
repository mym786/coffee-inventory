const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    sku: String,
    product_type: String,
    description: String,
    meta: {}
});

module.exports = mongoose.model('Product', productSchema);