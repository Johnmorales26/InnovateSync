var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/authors', function(_, res) {
  res.render('authors', { authors: "Jonatan Morales, Uriel Torres" })
});

module.exports = router;