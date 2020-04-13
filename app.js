const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/2', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '2.html'));
});

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '1.html'));
});

app.listen(3000);
