var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send('{[{"id": 1, "citta":"milano"},{"id": 2, "citta":"ancona"},{"id": 3, "citta":"padova"},{"id": 4, "citta":"genova"},{"id": 5, "citta":"torino"},{"id": 6, "citta":"roma"}]}');
});

module.exports = router;