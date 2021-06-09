// database connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('error', err => {
    console.log(err);
});

mongoose.connection.on('connected', () => {
    console.log('connected');
});

mongoose.connection.on('disconnected', () => {
    console.log('disconnected');
});