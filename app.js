const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('Always');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send(`
        <h1>Add Product</h1>
    `);
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send(`
        <h1>Hello</h1>
    `);
});

app.listen(3000);
