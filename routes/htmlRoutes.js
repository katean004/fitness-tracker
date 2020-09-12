const express = require('express');
const router = express.Router();
const path = require("path");



// define the home page route
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// define the exercise route
router.use('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


// define the stats route
router.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


module.exports = router
