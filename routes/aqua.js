var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.status(200).send({
		cilukba: 'hehe'
	})
});

router.post('/', function(req, res, next) {
	res.status(200).send({
		cilukba: 'hehe'
	})
});

module.exports = router;
