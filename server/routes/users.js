const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.get('/authors', (_, res) => {
  res.render('authors', { authors: 'Jonatan Morales, Uriel Torres' });
});

module.exports = router;
