var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/debug', function(req, res, next) {
  res.render('debug', { title: 'Debug' });
});


module.exports = router;
