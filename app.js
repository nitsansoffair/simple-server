const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const route = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(route);

app.listen(3000);
