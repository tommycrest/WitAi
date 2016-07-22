var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send('{ [ {"id": 1, "modello":"bobber"},{"id": 2, "modello":"roamer"},{"id": 3, "modello":"V7"},{"id": 4, "modello":"V9"}]}');
});

module.exports = router;