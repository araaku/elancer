
/*
 * GET users listing.
 */

var express = require('express');
var router = express.Router();

router.get('/userlist', function (req, res) {
    res.send('Response from USER LIST');
});

router.get('/', function (req, res) {
    res.send('Response from USER');
});

module.exports = router;