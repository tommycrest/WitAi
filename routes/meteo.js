var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	var location = req.param('location');
	if( location === 'milano') {
		res.send('{"condizione":"soleggiato", "temperatura":"32°C"}');
	}
	if( location === 'padova') {
		res.send('{"condizione":"variabile", "temperatura":"32°C"}');
	}
	if( location === 'genova') {
		res.send('{"condizione":"nuvoloso", "temperatura":"22°C"}');
	}
	if( location === 'roma') {
		res.send('{"condizione":"pioggie sparse", "temperatura":"18°C"}');
	}
	
});

module.exports = router;