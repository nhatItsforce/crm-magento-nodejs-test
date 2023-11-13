var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/debug', function(req, res, next) {
  res.render('debug', { title: 'Debug' });
});




router.get('/debug2', function(req, res, next) {
  res.render('debug2', { title: 'Debug' });
});

module.exports = router;
