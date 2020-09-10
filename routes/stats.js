var express = require('express')
var router = express.Router()

// define the stats route
router.get('/stats', function (req, res) {
    res.send('stats page')
});
  

module.exports = router
