const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'InnovateSync',
    author: 'Jonatan Morales, Uriel Torres',
  });
});

module.exports = router;
