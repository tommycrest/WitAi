var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/meteo', function(req, res, next) {
  res.render('index', { title: 'Meteo info json' });
});

module.exports = router;