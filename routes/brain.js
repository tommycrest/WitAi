var express = require('express');
//var skynet = require('skynetbrain');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('skynet', { title: 'Skynet: The frontier of communication' });
});

router.post('/', function(request, response, next ){
	
});

module.exports = router;
