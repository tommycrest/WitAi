var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if( req.body.location == "milano") {
	  res.render('{"soleggiato"}');
  }
});

module.exports = router;