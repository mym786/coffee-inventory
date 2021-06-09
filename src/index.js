const express = require('express');
const config = require('./config');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// modules
const inventory = require('./modules/inventory');

app.use('/test', (req, res) => {
    res.json({
        test: 'ss'
    });
})

app.use('/inventory', inventory);

module.exports = app;