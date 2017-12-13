var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('assignments', { title: 'Penn-Blockchain', error: req.session.err, login: req.session.login});
});

module.exports = router;