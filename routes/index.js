var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
    res.send('fitness tracker home page')
});

module.exports = router
