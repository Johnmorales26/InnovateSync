const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'InnovateSync',
    authors: 'Jonatan Morales, Uriel Torres',
  });
});

module.exports = router;
