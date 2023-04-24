const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get((req, res) => {
  console.log('hello, this is line 7')
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;