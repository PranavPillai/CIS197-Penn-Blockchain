var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	req.session.err = false;
  	res.render('chart', { title: 'Penn-Blockchain', username: req.session.username, login: req.session.login});
});

module.exports = router;
