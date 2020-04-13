const epxress = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = epxress.Router();

router.get('/2', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '2.html'));
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '1.html'));
});

module.exports = router;
