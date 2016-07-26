var express = require('express');
//var skynet = require('skynetbrain');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('skynet', { title: 'Skynet: The frontier of communication' });
});

router.post('/', function(request, response, next ){
	
	var data = request.body;
	console.log(data.toString());
	
	var logic = perceptronSkynet(data);
	
	response.send(logic);
	
});

function perceptronSkynet( data ) {
	
	var s = JSON.parse(JSON.stringify(data));
	console.log("Sono nel perceptron skynet ");
	console.log(s);
	var intent = '';
	if( s.operation == 'talking' ) {
		intent = s.intent;
		return "Possiamo parlare sono attivo!"
	} else {
		return "Devi dirmi qualcosa?"
	}
	
}

module.exports = router;
