var express = require('express');
var router = express.Router();


// define the home page route
router.get('/', function (req, res) {
    res.send('fitness tracker home page')
});

// define the exercise route
router.use('/exercise', function (req, res) {
    res.send('exercise page')
});


// define the stats route
router.get('/stats', function (req, res) {
    res.send('stats page')
});


module.exports = router
