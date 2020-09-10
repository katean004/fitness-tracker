var express = require('express')
var router = express.Router()
const Exercise = require("../exerciseModel");

// define the exercise route
router.use('/exercise', function (req, res) {
    res.send('exercise page')
});

module.exports = router
