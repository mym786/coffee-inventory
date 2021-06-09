const productSchema = require('./models/product');

module.exports.getProductByAttributes = async function (ctx, attributes) {
    try {
        const search = {};
        if (attributes.product_type) {
            search['product_type'] = createFindCriteria(attributes.product_type);
        }

        const _meta = Object.keys(attributes).filter(a => a.startsWith('attr.'));
        console.log(_meta);
        _meta.forEach((v) => {
            const [a , k] = v.split('.');
            const value = attributes[v];
            
            search['meta.'+k] = createFindCriteria(value);
        });
        console.debug(search);
        const products = await productSchema.find(search);
        return products;
    } finally {

    }
}

module.exports.addProduct = async function(ctx, product) {
    try {
        const _product = new productSchema(product);
        return await _product.save();
    } finally {

    }
}

function validate(attributes) {

}

function createFindCriteria(value) {
    if (Array.isArray(value)) return {
        $in: value
    }
    return value;
}