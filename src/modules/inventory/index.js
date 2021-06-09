const router = require('express').Router();

const inventoryMgr = require('./inventory-manager');

router.get('/', async function getProductByAttributes(req, res) {
    try {
        const attribs = req.query;
        const data = await inventoryMgr.getProductByAttributes({}, attribs);
        return res.json(data);
    } catch(err) {
        console.error(err);
        return res.err(err);
    }
});

router.post('/', async function addProduct(req, res) {
    try {
        const product = req.body;
        const data = inventoryMgr.addProduct({}, product);
        return res.json(data);
    } catch(err) {
        return res.err(err);
    }
});

module.exports = router;