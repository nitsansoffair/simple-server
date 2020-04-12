const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Log 1');
    next();
});

app.use((req, res, next) => {
    console.log('Log 2');
    next();
});

app.use('/users', (req, res, next) => {
    res.send(`
        <h1>Users</h1>
    `);
});

app.use('/', (req, res, next) => {
    res.send(`
        <h1>Assignment 2</h1>
    `);
});

app.listen(3000);
